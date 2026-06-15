$ErrorActionPreference = "Continue"
$inputDir  = (Get-Item "C:\Users\Monster\OneDrive\Masa*st*\ordinovideolar").FullName
$outputDir = "C:\ordino-next\public\videos\influencers"
Write-Output "Input dir: $inputDir"
New-Item -Path $outputDir -ItemType Directory -Force | Out-Null

$videos = Get-ChildItem -Path $inputDir -Include "*.mp4","*.mov","*.avi","*.mkv" -Recurse
$totalOriginal = 0
$totalNew = 0
$counter = 0

foreach ($video in $videos) {
    $counter++
    $baseName = $video.BaseName -replace '[^a-zA-Z0-9_-]', '_'
    $outputFile = Join-Path $outputDir "$baseName.mp4"

    Write-Output "[$counter/$($videos.Count)] $($video.Name) -> $baseName.mp4"

    ffmpeg -i $video.FullName `
        -c:v libx264 `
        -crf 24 `
        -preset slow `
        -vf "scale='if(gt(ih,1080),-2,iw)':'if(gt(ih,1080),1080,ih)':flags=lanczos" `
        -c:a aac `
        -b:a 96k `
        -movflags +faststart `
        -pix_fmt yuv420p `
        -y $outputFile 2>$null | Out-Null

    if (Test-Path $outputFile) {
        $origSize = [math]::Round($video.Length / 1MB, 2)
        $newSize  = [math]::Round((Get-Item $outputFile).Length / 1MB, 2)
        $reduction = [math]::Round((1 - $newSize/$origSize) * 100, 0)
        $totalOriginal += $video.Length
        $totalNew += (Get-Item $outputFile).Length
        Write-Output ("  OK  {0}MB -> {1}MB (-{2}%)" -f $origSize, $newSize, $reduction)
    } else {
        Write-Output "  ERROR: $($video.Name) failed"
    }
}

Write-Output "=== SUMMARY ==="
Write-Output ("Total original: {0} MB" -f [math]::Round($totalOriginal/1MB,1))
Write-Output ("Total optimized: {0} MB" -f [math]::Round($totalNew/1MB,1))
if ($totalOriginal -gt 0) {
    Write-Output ("Savings: {0}%" -f [math]::Round((1 - $totalNew/$totalOriginal) * 100, 0))
}
Write-Output "DONE"
