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
          src="/projects/unim8s-semester-1-2026/parallax-background.jpg" 
          alt="Background" 
          fill 
          className="object-cover object-bottom w-screen"
        />
      </div>
      <div className="h-36 md:h-60"/>
      <div className="relative z-10">
        <Image 
          src="/projects/unim8s-semester-1-2026/UniM8s.png" 
          alt="Foreground" 
          width={5000} 
          height={5000} 
          className="w-screen h-auto"
        />
      </div>
      <div className="relative bg-[#0c0d46] flex flex-col gap-2 md:gap-5 items-center pt-5 md:pt-0 px-6 md:px-24 text-white text-center font-humane text-4xl md:text-6xl tracking-wide z-10 pb-5">
        <p className="font-bold tracking-wider leading-none">
          {"UNIM8S Social Leagues".toUpperCase()}
        </p>
        <div className="relative bg-white text-[#0c0d46] text-[4.25rem] md:text-[13rem] font-bold w-fit px-3 md:px-16 overflow-hidden mb-3">
          <p className="leading-none -tracking-tight">{"Visual Direction".toUpperCase()}</p>
          <div className="absolute bottom-0 left-0 z-10 h-1 md:h-6 bg-[#0c0d46] w-full"></div>
        </div>
        <p className="leading-none font-base text-5xl">
          {"This semester, I provided full photo coverage of the UNIM8S Social Leagues finals across basketball A & B grade, basketball C grade, volleyball, football, and indoor netball. The aim was to capture high-quality images for all teams and athletes, helping create lasting memories for students. Having covered the same competitions in Semester 2, 2025, this experience also highlighted how much I have developed as a photographer over the past six months. I am grateful to the UNIM8S team for the opportunity to contribute to another successful semester of university sport.".toUpperCase()}
        </p>
      </div>
      <div className="h-10 md:h-20 w-full bg-gradient-to-b from-[#0c0d46] to-transparent z-10"/>
    </div>
  );
}