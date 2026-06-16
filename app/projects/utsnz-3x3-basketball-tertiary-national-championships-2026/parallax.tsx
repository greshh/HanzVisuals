"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import InstagramEmbed from "./instagram";

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
    <div className="relative h-fit w-full">
      <div ref={bgRef} className="absolute inset-0 z-0 w-full h-[15rem] md:h-[32rem]">
        <Image 
          src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/parallax-background.jpg" 
          alt="Background" 
          fill 
          className="object-cover w-full"
        />
      </div>
      <div className="h-36 md:h-60"/>
      <div className="relative z-10">
        <Image 
          src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/UTSNZ.png" 
          alt="Foreground" 
          width={5000} 
          height={5000} 
          className="w-full h-auto"
        />
      </div>
      <div className="relative bg-[#8d898aff] flex flex-col gap-2 md:gap-12 items-center pt-5 md:pt-0 px-6 md:px-24 text-white text-center font-humane text-4xl md:text-6xl tracking-wide z-10 pb-10 md:pb-20">
        <p className="font-semibold tracking-wider leading-none">
          {"National 3x3 Tertiary Championships".toUpperCase()}
        </p>
        <a 
          href="https://photos.app.goo.gl/rLNWaMtkuKs7pvYu7" 
          className="w-full h-16 md:h-20 mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full p-0 md:py-0 md:px-0 bg-white flex flex-row items-center justify-center rounded-lg gap-5 hover:bg-[#d9d9d9ff] transition-hover duration-500">
            <p className="text-[#434343] text-center font-humane text-3xl md:text-7xl font-bold tracking-wider text-wrap pt-1 md:pt-2">{("3x3 Basketball Photo Album").toUpperCase()}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434343" viewBox="0 0 16 16" className="w-4 h-4 md:w-6 md:h-6">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </div>
        </a>
        <div className="flex flex-col items-center mb-7 md:mb-0">
          <div className="relative bg-white text-[#8d898aff] text-[4.25rem] md:text-[12rem] font-bold w-fit px-3 md:px-16 overflow-hidden">
            <h2 className="leading-none -tracking-tight">{"Visual Direction".toUpperCase()}</h2>
            <div className="absolute bottom-0 left-0 z-10 h-1 md:h-6 bg-[#8d898aff] w-full"></div>
          </div>
          <div className="flex flex-row flex-wrap md:flex-nowrap gap-5 md:gap-10 justify-center items-center">
            <Image 
              src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/image1.png" 
              alt="Basketball Player" 
              width={5000} 
              height={5000} 
              className="h-[12rem] md:h-[25rem] w-auto"
            />
            <p className="leading-none font-base text-3xl md:text-5xl">
              {"I volunteered as an event photographer for the UTSNZ 3x3 Tertiary Championships, where our role was to capture as much photo content as possible for both the participating institutions and UTSNZ. Across two days of competition, we delivered a comprehensive gallery of edited photos as well as multiple Instagram Reels, helping document the tournament while highlighting the energy, culture, and success of the event. Grateful to the team at UTSNZ for the opportunity.".toUpperCase()}
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center md:px-20">
          <div className="flex flex-row gap-20 items-center justify-center flex-wrap md:flex-nowrap">
            <div className="text-center pb-3">
              <h3 className="w-full text-white text-6xl md:text-9xl font-bold overflow-hidden leading-none -tracking-tight mb-4">{"Reels Content".toUpperCase()}</h3>
              <div className="flex justify-center w-full md:mb-0 mb-7">
                <Image 
                  src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/image2.png" 
                  alt="Phone of a basketball reel by Hanz Visuals" 
                  width={5000} 
                  height={5000} 
                  className="block md:hidden h-[15rem] md:h-[30rem] w-auto"
                />
              </div>
              <p className="leading-none font-base text-3xl md:text-5xl">
                {"Beyond photography, I took the initiative to create short-form video content throughout the tournament. Five Instagram Reels were produced during the event generating over 50,000 views, extending its reach well beyond the venue and helping drive engagement while showcasing the excitement of tertiary 3x3 basketball to a broader audience.".toUpperCase()}
              </p>
            </div>
            <Image 
              src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/image2.png" 
              alt="Phone of a basketball reel by Hanz Visuals" 
              width={5000} 
              height={5000} 
              className="hidden md:block h-[30rem] w-auto"
            />
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center md:gap-10 md:flex-nowrap flex-wrap">
          <InstagramEmbed index={1} link="https://www.instagram.com/reel/DYadqnjzTNe/"/>
          <InstagramEmbed index={2} link="https://www.instagram.com/reel/DYav6vMTLWn/"/>
          <InstagramEmbed index={3} link="https://www.instagram.com/reel/DYa0ExTTrBH/"/>
          <InstagramEmbed index={4} link="https://www.instagram.com/reel/DYbFZm0Tm_P/"/>
          <InstagramEmbed index={5} link="https://www.instagram.com/reel/DYbIiBnzbst/"/>
        </div>
      </div>
    </div>
  );
}