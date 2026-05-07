import { defineConfig, devices } from "@playwright/test";

const UA = {
  macSafari:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
  macChrome:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  macFirefox:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
  macEdge:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  winChrome:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  winFirefox:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
  winEdge:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
  linuxChrome:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  linuxFirefox:
    "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
};

const desktopViewport = { width: 1280, height: 720 };

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 4,
  retries: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on",
    screenshot: "only-on-failure",
    video: "off",
  },
  projects: [
    // ============ Desktop — non-touch, hover:hover, pointer:fine ============
    {
      name: "macos-safari",
      use: {
        ...devices["Desktop Safari"],
        userAgent: UA.macSafari,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only|@custom-only/,
      metadata: { expected: "native", platform: "desktop", engine: "webkit" },
    },
    {
      name: "macos-chrome",
      use: {
        ...devices["Desktop Chrome"],
        userAgent: UA.macChrome,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only/,
      metadata: { expected: "custom", platform: "desktop", engine: "chromium" },
    },
    {
      name: "macos-firefox",
      use: {
        ...devices["Desktop Firefox"],
        userAgent: UA.macFirefox,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only|@custom-only/,
      metadata: { expected: "native", platform: "desktop", engine: "firefox" },
    },
    {
      name: "macos-edge",
      use: {
        ...devices["Desktop Chrome"],
        userAgent: UA.macEdge,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only/,
      metadata: { expected: "custom", platform: "desktop", engine: "chromium" },
    },
    {
      name: "windows-chrome",
      use: {
        ...devices["Desktop Chrome"],
        userAgent: UA.winChrome,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only/,
      metadata: { expected: "custom", platform: "desktop", engine: "chromium" },
    },
    {
      name: "windows-firefox",
      use: {
        ...devices["Desktop Firefox"],
        userAgent: UA.winFirefox,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only|@custom-only/,
      metadata: { expected: "native", platform: "desktop", engine: "firefox" },
    },
    {
      name: "windows-edge",
      use: {
        ...devices["Desktop Chrome"],
        userAgent: UA.winEdge,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only/,
      metadata: { expected: "custom", platform: "desktop", engine: "chromium" },
    },
    {
      name: "linux-chrome",
      use: {
        ...devices["Desktop Chrome"],
        userAgent: UA.linuxChrome,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only/,
      metadata: { expected: "custom", platform: "desktop", engine: "chromium" },
    },
    {
      name: "linux-firefox",
      use: {
        ...devices["Desktop Firefox"],
        userAgent: UA.linuxFirefox,
        viewport: desktopViewport,
      },
      grepInvert: /@touch-only|@custom-only/,
      metadata: { expected: "native", platform: "desktop", engine: "firefox" },
    },
    // ============ Mobile / Tablet — touch, native cursor ============
    {
      name: "ios-safari",
      use: { ...devices["iPhone 14"] },
      grepInvert: /@desktop-only|@custom-only/,
      metadata: { expected: "native", platform: "mobile", engine: "webkit" },
    },
    {
      name: "ipados-safari",
      use: { ...devices["iPad Pro 11"] },
      grepInvert: /@desktop-only|@custom-only/,
      metadata: { expected: "native", platform: "tablet", engine: "webkit" },
    },
    {
      name: "android-chrome",
      use: { ...devices["Pixel 7"] },
      grepInvert: /@desktop-only|@custom-only/,
      metadata: { expected: "native", platform: "mobile", engine: "chromium" },
    },
  ],
});
