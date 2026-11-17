"use client";

import { useEffect, useState } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1500,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const start = performance.now();

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayValue(Math.round(progress * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      }
    };

    frameId = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(frameId);
  }, [duration, value]);

  return (
    <span>
      {displayValue.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}
