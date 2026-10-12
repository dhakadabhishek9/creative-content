"use client";

import { useEffect } from "react";

export const SmoothWheel = () => {
  useEffect(() => {
    // Only apply on non-touch devices where mouse wheel chunking happens
    if (typeof window === "undefined") return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isRunning = false;
    let isWheelActive = false;
    let wheelTimeout: NodeJS.Timeout;

    // Linear interpolation for silky fluid motion
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const update = () => {
      currentY = lerp(currentY, targetY, 0.14);

      // Stop loop when close enough
      if (Math.abs(targetY - currentY) > 0.5) {
        window.scrollTo(0, Math.round(currentY));
        requestAnimationFrame(update);
      } else {
        window.scrollTo(0, targetY);
        currentY = targetY;
        isRunning = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Don't interfere if user is holding ctrl (pinch zoom) or inside inputs
      if (e.ctrlKey || e.altKey) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      // Detect if user has initiated a mouse wheel tick
      isWheelActive = true;
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        isWheelActive = false;
      }, 150);

      // Normalize delta across different browsers / notches
      let delta = e.deltaY;
      if (e.deltaMode === 1) {
        // Line mode (Firefox on Linux)
        delta *= 35;
      }

      // Smooth step
      targetY = Math.max(0, Math.min(maxScroll, targetY + delta * 0.9));

      if (!isRunning) {
        currentY = window.scrollY;
        isRunning = true;
        requestAnimationFrame(update);
      }

      e.preventDefault();
    };

    // Keep target in sync if user drags the scrollbar directly
    const onScroll = () => {
      if (!isWheelActive && !isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    // Smooth anchor navigation (#services, #assignments, #calculator, etc.)
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const elementPos = element.getBoundingClientRect().top + window.scrollY;
          const offsetPos = elementPos - 72; // header height offset

          targetY = Math.max(0, offsetPos);
          if (!isRunning) {
            currentY = window.scrollY;
            isRunning = true;
            requestAnimationFrame(update);
          }
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchorClick);
      clearTimeout(wheelTimeout);
    };
  }, []);

  return null;
};
