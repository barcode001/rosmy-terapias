import React, { useEffect, useRef } from "react";

export default function FairyCursor() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "fairy-layer";
    document.body.appendChild(container);

    const POOL = 100;
    const pool = [];
    for (let i = 0; i < POOL; i++) {
      const el = document.createElement("span");
      el.className = "fairy-sparkle";
      el.addEventListener("animationend", () => {
        el.classList.remove("play");
        pool.push(el);
      });
      pool.push(el);
    }

    let lastSpawn = 0;
    const onMove = (e) => {
      const now = performance.now();
      if (now - lastSpawn < 12) return; // rate limit
      lastSpawn = now;

      const el = pool.pop();
      if (!el) return;

      // slight random drift
      const dx = (Math.random() - 0.5) * 10;
      const dy = (Math.random() - 0.5) * 10;
      const x = e.clientX + dx;
      const y = e.clientY + dy;

      // pass coords via CSS vars (used by keyframes)
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);

      // variety
      const size = 6 + Math.random() * 8;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.setProperty("--twinkle-rot", `${Math.random() * 360}deg`);
      el.style.setProperty("--twinkle-scale", `${1 + Math.random() * 0.8}`);

      container.appendChild(el);
      // restart animation
      // eslint-disable-next-line no-unused-expressions
      el.offsetWidth;
      el.classList.add("play");
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      container.remove();
    };
  }, []);

  return null;
}
