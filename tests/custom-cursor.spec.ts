import { test, expect } from "@playwright/test";

const URL = "/";

type Expected = "custom" | "native";

function getExpected(testInfo: { project: { metadata?: unknown } }): Expected {
  const m = testInfo.project.metadata as { expected?: Expected } | undefined;
  return m?.expected ?? "custom";
}

async function gotoAndSettle(page: import("@playwright/test").Page) {
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  // React hydration + CustomCursor useEffect
  await page.waitForTimeout(500);
}

/**
 * Custom cursor artik sadece ilk mousemove'da aktive olur. "custom" beklenen
 * projelerde class'in eklenmesini garanti etmek icin birkac warm-up mouse
 * hareketi yapilir; "native" projelerde no-op (listener bagli degil).
 */
async function activateCursorIfNeeded(
  page: import("@playwright/test").Page,
  expected: Expected
) {
  if (expected !== "custom") return;
  for (let i = 0; i < 5; i++) {
    await page.mouse.move(100 + i * 30, 100 + i * 30, { steps: 2 });
    await page.waitForTimeout(80);
    const hasClass = await page.evaluate(() =>
      document.body.classList.contains("custom-cursor-active")
    );
    if (hasClass) return;
  }
}

async function getCursorState(page: import("@playwright/test").Page) {
  return page.evaluate(() => {
    const body = document.body;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    const bodyCursor = getComputedStyle(body).cursor;
    const hasActiveClass = body.classList.contains("custom-cursor-active");
    const dotOpacity = dot
      ? parseFloat(getComputedStyle(dot).opacity || "0")
      : null;
    const ringOpacity = ring
      ? parseFloat(getComputedStyle(ring).opacity || "0")
      : null;
    const dotRect = dot ? (dot as Element).getBoundingClientRect() : null;
    return {
      bodyCursor,
      hasActiveClass,
      dotExists: !!dot,
      ringExists: !!ring,
      dotOpacity,
      ringOpacity,
      dotRect: dotRect
        ? {
            x: dotRect.x,
            y: dotRect.y,
            width: dotRect.width,
            height: dotRect.height,
          }
        : null,
    };
  });
}

test.describe("Cursor cross-browser invariants", () => {
  // ===== A. CRITICAL INVARIANT =====
  // Hicbir kullanici, hicbir cihazda cursor'siz sayfa gormemeli.
  test("A. cursor invariant: native VEYA custom cursor mutlaka gorunur", async ({
    page,
  }, testInfo) => {
    await gotoAndSettle(page);

    // Mouse'u oynat — eger custom cursor varsa is-hidden kalkmali
    await page.mouse.move(640, 360, { steps: 5 });
    await page.waitForTimeout(200);

    const s = await getCursorState(page);
    console.log(`[${testInfo.project.name}]`, JSON.stringify(s));

    const nativeCursorVisible = s.bodyCursor !== "none";
    const customCursorVisible =
      s.dotExists && (s.dotOpacity ?? 0) > 0 && (s.dotRect?.width ?? 0) > 0;

    const cursorIsVisible = nativeCursorVisible || customCursorVisible;
    expect(
      cursorIsVisible,
      `KRITIK: Hic cursor gorunmuyor. body.cursor=${s.bodyCursor}, dot opacity=${s.dotOpacity}`
    ).toBe(true);
  });

  // ===== B. DETECTION ACCURACY =====
  // Beklenen tarayicida beklenen cursor turu aktif olmali.
  test("B. detection: dogru tarayicida dogru cursor turu aktif", async ({
    page,
  }, testInfo) => {
    await gotoAndSettle(page);
    const expected = getExpected(testInfo);
    await activateCursorIfNeeded(page, expected);
    await page.waitForTimeout(100);

    const s = await getCursorState(page);
    console.log(`[${testInfo.project.name}] expected=${expected}`, s);

    if (expected === "custom") {
      expect(
        s.hasActiveClass,
        "Custom cursor olmasi gereken yerde custom-cursor-active class yok"
      ).toBe(true);
      expect(
        s.bodyCursor,
        "Custom cursor aktifken body.cursor 'none' olmali"
      ).toBe("none");
    } else {
      expect(
        s.hasActiveClass,
        "Native cursor olmasi gereken yerde custom-cursor-active class eklenmis (bypass calismadi)"
      ).toBe(false);
      expect(
        s.bodyCursor,
        "Native cursor olmasi gereken yerde body.cursor 'none' olmamali"
      ).not.toBe("none");
    }
  });

  // ===== C. MOUSE TRACKING =====
  // Custom cursor aktif tarayicilarda dot mouse pozisyonunu izlemeli.
  test("C. mouse tracking: custom cursor mouse'u izler @custom-only", async ({
    page,
  }, testInfo) => {
    await gotoAndSettle(page);
    // Listener'i atese et + cursor'i aktive et (class eklenir, is-hidden kalkar)
    await activateCursorIfNeeded(page, "custom");
    await page.waitForTimeout(100);

    const target = { x: 500, y: 350 };
    await page.mouse.move(target.x, target.y, { steps: 10 });
    await page.waitForTimeout(300);

    const s = await getCursorState(page);
    console.log(`[${testInfo.project.name}]`, s.dotRect);

    expect(s.dotExists, "cursor-dot DOM'da yok").toBe(true);
    expect(s.dotRect, "cursor-dot bounding box alinamadi").not.toBeNull();

    if (s.dotRect) {
      const centerX = s.dotRect.x + s.dotRect.width / 2;
      const centerY = s.dotRect.y + s.dotRect.height / 2;
      // 50px tolerans (rAF interpolation icin)
      expect(Math.abs(centerX - target.x)).toBeLessThan(50);
      expect(Math.abs(centerY - target.y)).toBeLessThan(50);
    }
  });

  // ===== D. TOUCH BEHAVIOR =====
  // Touch device'larda custom cursor hic eklenmemeli.
  test("D. touch device: custom cursor eklenmez @touch-only", async ({
    page,
  }, testInfo) => {
    await gotoAndSettle(page);

    const s = await getCursorState(page);
    console.log(`[${testInfo.project.name}]`, s);

    expect(
      s.hasActiveClass,
      "Touch device'a custom cursor eklendi (yanlis)"
    ).toBe(false);
    expect(
      s.bodyCursor,
      "Touch device'da body.cursor:none yapilmamali"
    ).not.toBe("none");
  });

  // ===== E. JS ERROR FALLBACK =====
  // CustomCursor JS'i baslamasa bile body cursor:none olmamali (CSS guard).
  test("E. JS hata fallback: script calismasa bile native cursor gorunur", async ({
    page,
  }, testInfo) => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });

    const expected = getExpected(testInfo);
    if (expected === "custom") {
      // Yeni davranis: class sadece ilk mousemove'da eklenir. Aktive et:
      await page.waitForTimeout(500);
      await activateCursorIfNeeded(page, "custom");
      const hasClass = await page.evaluate(() =>
        document.body.classList.contains("custom-cursor-active")
      );
      expect(hasClass, "Mouse aktivasyonu sonrasi class hala yok").toBe(true);
      await page.evaluate(() => {
        document.body.classList.remove("custom-cursor-active");
      });
      // Microtask + tek bir frame yetiyor, ama strict mode re-render olasiligina karsi
      // class'in geri eklenmedigini de dogrulayalim.
      await page.waitForTimeout(200);
      const stillRemoved = await page.evaluate(
        () => !document.body.classList.contains("custom-cursor-active")
      );
      expect(
        stillRemoved,
        "Class kaldirildiktan sonra geri eklendi — re-mount riskli"
      ).toBe(true);
    } else {
      // Native cursor zaten beklenir; useEffect class eklemiyor olmali.
      await page.waitForTimeout(400);
    }

    const s = await getCursorState(page);
    console.log(`[${testInfo.project.name}] fallback`, s);

    expect(
      s.bodyCursor,
      "JS hata sonrasi native cursor 'none' olmamali — kullanici imleci goremez"
    ).not.toBe("none");
  });
});
