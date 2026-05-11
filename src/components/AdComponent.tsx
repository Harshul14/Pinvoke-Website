"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT, ADSENSE_SLOT, ENABLE_ADS } from "@/lib/config";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

/**
 * AdComponent
 *
 * A reusable Google AdSense display-ad unit.
 *
 * Fixes applied:
 *   1. Uses a `hasPushed` ref to strictly ensure push() is only called once
 *      per component instance, even if useEffect runs multiple times.
 *   2. Checks `data-adsbygoogle-status` on the <ins> element before calling
 *      push() to prevent the "already have ads" error.
 *   3. Defers push() until the element has a positive offsetWidth to prevent
 *      the "No slot size for availableWidth=0" error.
 *
 * Place <AdComponent /> anywhere in the UI where an ad unit should appear.
 * The AdSense <script> tag is injected once from layout.tsx.
 */
export default function AdComponent() {
  const insRef = useRef<HTMLModElement>(null);
  const hasPushed = useRef(false);

  useEffect(() => {
    if (!ENABLE_ADS) return;

    const ins = insRef.current;
    if (!ins) return;

    // Guard 1: Local instance check
    if (hasPushed.current) return;

    // Guard 2: DOM status check (prevents duplicate pushes on the same element)
    if (ins.getAttribute("data-adsbygoogle-status")) {
      hasPushed.current = true;
      return;
    }

    const tryPush = () => {
      // Check if unmounted or already pushed during the RAF wait
      if (!insRef.current || hasPushed.current) return;

      // Double-check DOM status inside the loop
      if (insRef.current.getAttribute("data-adsbygoogle-status")) {
        hasPushed.current = true;
        return;
      }

      if (insRef.current.offsetWidth === 0) {
        // Element not laid out yet — retry on the next animation frame.
        requestAnimationFrame(tryPush);
        return;
      }

      try {
        hasPushed.current = true;
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (err) {
        console.error("[AdSense] Failed to push ad:", err);
        // Reset so it can try again if it was a transient error, 
        // though usually AdSense errors are fatal for the unit.
        hasPushed.current = false; 
      }
    };

    requestAnimationFrame(tryPush);

    return () => {
      // Cleanup
    };
  }, []);

  // When ads are disabled, render nothing — no DOM nodes, no requests.
  if (!ENABLE_ADS) return null;

  return (
    <div className="w-full flex justify-center my-8">
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", minWidth: "300px", width: "100%" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={ADSENSE_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
