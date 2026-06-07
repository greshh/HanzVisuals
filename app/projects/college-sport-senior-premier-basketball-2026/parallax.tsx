"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Parallax() {
  const bgRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      if (bgRef.current) {
        bgRef.current.style.transform =
          `translateY(${scrollY.current * 0.3}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-fit w-screen">
      <div ref={bgRef} className="absolute inset-0 z-0 w-screen h-[20rem] md:h-[32rem]">
        <Image 
          src="/projects/college-sport-senior-premier-basketball-2026/parallax-background.jpg" 
          alt="Background" 
          fill 
          className="object-cover object-bottom w-screen"
        />
      </div>
      <div className="h-36 md:h-60"/>
      <div className="relative z-10">
        <Image 
          src="/projects/college-sport-senior-premier-basketball-2026/Rosmini.png" 
          alt="Foreground" 
          width={5000} 
          height={5000} 
          className="w-screen h-auto"
        />
      </div>
    </div>
  );
}