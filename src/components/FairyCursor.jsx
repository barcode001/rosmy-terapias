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
// import React, { useEffect, useRef } from "react";

// export default function FairyCursorCanvas() {
//   const canvasRef = useRef(null);
//   const rafRef = useRef(0);
//   const particlesRef = useRef([]);
//   const pointerRef = useRef({ x: -9999, y: -9999 });
//   const enabledRef = useRef(true);

//   useEffect(() => {
//     const mediaHover = window.matchMedia("(hover: hover) and (pointer: fine)");
//     const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
//     enabledRef.current = mediaHover.matches && !reduced.matches;

//     const canvas = document.createElement("canvas");
//     canvas.className = "fairy-layer-canvas";
//     document.body.appendChild(canvas);
//     canvasRef.current = canvas;

//     const ctx = canvas.getContext("2d");
//     let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

//     const resize = () => {
//       const { innerWidth: w, innerHeight: h } = window;
//       canvas.width = Math.floor(w * dpr);
//       canvas.height = Math.floor(h * dpr);
//       canvas.style.width = w + "px";
//       canvas.style.height = h + "px";
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const spawn = (x, y) => {
//       // Fewer particles on slower devices
//       const base = /Mobi|Android/i.test(navigator.userAgent) ? 10 : 18;
//       const count = base + Math.floor(Math.random() * 6);

//       for (let i = 0; i < count; i++) {
//         const angle = Math.random() * Math.PI * 2;
//         const speed = 0.5 + Math.random() * 1.8;
//         const size = 1.5 + Math.random() * 2.5;

//         // Purple → pink range
//         const hue = 285 + Math.random() * 30; // 285–315
//         const sat = 85 + Math.random() * 10; // 85–95%
//         const light = 65 + Math.random() * 10; // 65–75%

//         particlesRef.current.push({
//           x,
//           y,
//           vx: Math.cos(angle) * speed,
//           vy: Math.sin(angle) * speed - 0.3, // slight upward drift
//           life: 1, // 1 → 0
//           decay: 0.016 + Math.random() * 0.02,
//           size,
//           hue,
//           sat,
//           light,
//           glow: 0.5 + Math.random() * 0.6,
//         });
//       }
//     };

//     const onMove = (e) => {
//       if (!enabledRef.current) return;
//       pointerRef.current.x = e.clientX;
//       pointerRef.current.y = e.clientY;
//       spawn(e.clientX, e.clientY);
//     };

//     window.addEventListener("pointermove", onMove, { passive: true });

//     const step = () => {
//       rafRef.current = requestAnimationFrame(step);
//       if (!enabledRef.current) return;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw particles
//       const arr = particlesRef.current;
//       for (let i = arr.length - 1; i >= 0; i--) {
//         const p = arr[i];
//         p.x += p.vx;
//         p.y += p.vy;
//         p.vy += 0.01; // gentle gravity
//         p.vx *= 0.985; // slight friction
//         p.vy *= 0.985;
//         p.life -= p.decay;

//         if (p.life <= 0) {
//           arr.splice(i, 1);
//           continue;
//         }

//         const alpha = Math.max(0, Math.min(1, p.life));
//         // soft glow
//         ctx.save();
//         ctx.globalAlpha = alpha;
//         ctx.shadowBlur = 12 * p.glow;
//         ctx.shadowColor = `hsla(${p.hue} ${p.sat}% ${p.light + 15}% / ${
//           0.6 * alpha
//         })`;

//         // bright core + falloff ring
//         const grad = ctx.createRadialGradient(
//           p.x,
//           p.y,
//           0,
//           p.x,
//           p.y,
//           p.size * 3
//         );
//         grad.addColorStop(
//           0,
//           `hsla(${p.hue} ${p.sat}% ${Math.min(95, p.light + 20)}% / ${
//             0.95 * alpha
//           })`
//         );
//         grad.addColorStop(
//           0.4,
//           `hsla(${p.hue} ${p.sat}% ${p.light}% / ${0.6 * alpha})`
//         );
//         grad.addColorStop(1, `hsla(${p.hue} ${p.sat}% ${p.light}% / 0)`);

//         ctx.fillStyle = grad;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();
//       }
//     };

//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("pointermove", onMove);
//       canvas.remove();
//     };
//   }, []);

//   return null;
// }
