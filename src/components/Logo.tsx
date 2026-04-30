"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const update = () => {
      setIsDark(document.documentElement.dataset.theme !== "light");
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={isDark ? "/logo-white.png" : "/logo-dark.png"}
        alt="DeepXlab"
        width={3686}
        height={1034}
        className="h-9 md:h-10 w-auto"
        priority
      />
    </span>
  );
}
