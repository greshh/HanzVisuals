"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Spotify({ colour, projectKey, link }: { colour: string, projectKey: string, link: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
  },[])

  return (
    <div className="absolute top-0 w-full h-[90vh]">
      {/* DESKTOP VERSION */}
      <div className="hidden md:block">
        <div className={`fixed top-[14vh] md:left-4 z-40 flex flex-row w-fit pl-1`}>
          <Image 
            src={`/projects/vinyls/${projectKey}.png`} 
            alt="Vinyl" 
            width={100} 
            height={100} 
            className={`fixed w-32 h-32 cursor-pointer animate-[spin_10s_linear_infinite] drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
            onClick={toggleOpen}
          />
        </div>
        <div className={`fixed top-[14vh] right-0 left-1 z-50 w-fit h-fit ${isOpen ? "translate-y-0 translate-x-0" : "translate-y-0 -translate-x-[300px]"} transition-transform duration-300 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] flex justify-center`}>
          <div className="flex flex-row w-fit h-fit">
            <div className={`bg-[#${colour}] w-6 h-[352px]`}>
              <button className="absolute top-4 left-5 text-white text-4xl z-50 w-fit h-fit" onClick={toggleOpen}>
                {"<"}
              </button>
            </div>
            
            <iframe 
              data-testid="embed-iframe" 
              className="-mx-5" 
              src={link} 
              width="280" 
              height="352" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div
        className="block md:hidden h-screen w-screen z-40"
      >
        <div className={`fixed -bottom-[352px] left-0 w-screen flex justify-center z-50 ${isOpen ? "-translate-y-[85%]" : "translate-y-0"} transition-transform duration-300`}>
          <div className="relative flex flex-col items-end w-screen">
            <Image
              src={`/projects/vinyls/${projectKey}.png`}
              alt="Vinyl"
              width={100}
              height={100}
              className="w-28 h-28 mr-2 cursor-pointer animate-[spin_10s_linear_infinite] drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"
              onClick={toggleOpen}
            />
            <div className="flex flex-row w-fit h-fit -mt-14 z-50 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <iframe
                data-testid="embed-iframe"
                className="w-screen"
                src={link}
                width="280"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}