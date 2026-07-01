"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const points: Point[] = [];
    const pointer = { x: 0, y: 0, active: false };
    let animation = 0;
    let width = 0;
    let height = 0;

    const buildPoints = () => {
      points.length = 0;
      const count = Math.max(42, Math.floor((width * height) / 25000));
      for (let index = 0; index < count; index += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.8 + 0.8,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildPoints();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(25, 214, 197, 0.18)");
      gradient.addColorStop(0.5, "rgba(255, 79, 216, 0.08)");
      gradient.addColorStop(1, "rgba(242, 184, 75, 0.13)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.lineWidth = 1;
      points.forEach((point, index) => {
        if (!reduceMotion.matches) {
          point.x += point.vx;
          point.y += point.vy;
        }

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        for (let next = index + 1; next < points.length; next += 1) {
          const target = points[next];
          const dx = point.x - target.x;
          const dy = point.y - target.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 145) {
            context.strokeStyle = `rgba(232, 238, 242, ${0.18 - distance / 900})`;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(target.x, target.y);
            context.stroke();
          }
        }

        if (pointer.active) {
          const dx = point.x - pointer.x;
          const dy = point.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 220) {
            context.strokeStyle = `rgba(25, 214, 197, ${0.38 - distance / 600})`;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(pointer.x, pointer.y);
            context.stroke();
          }
        }

        context.fillStyle = "rgba(255, 255, 255, 0.86)";
        context.beginPath();
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        context.fill();
      });

      if (width >= 640) {
        context.fillStyle = "rgba(255, 79, 216, 0.9)";
        context.fillRect(width * 0.68, height * 0.2, 86, 2);
        context.fillStyle = "rgba(242, 184, 75, 0.95)";
        context.fillRect(width * 0.74, height * 0.2 + 12, 44, 2);
      }

      animation = window.requestAnimationFrame(draw);
    };

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const leave = () => {
      pointer.active = false;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);

    return () => {
      window.cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-95"
    />
  );
}
