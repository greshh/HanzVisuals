"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FileView({ name, type, setCurrentFile }: { name: string; type: string; setCurrentFile: (file: string) => void; }) {
  const [isLandscape, setIsLandscape] = useState(true);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)");
    setIsLandscape(mediaQuery.matches);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div 
        className="bg-[#1c1c1c80] w-full h-full flex justify-center items-center cursor-pointer"
        onClick={()=>setCurrentFile("")}
      >
        <div className="flex flex-row gap-2 p-10 w-full h-full">
          {type == "png" && <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={`/projects/${name}`}
              alt={name}
              fill
              quality={100}
              className="object-contain"
            />
          </div>}
          {type == "mp4" && <video
            src={`/projects/${name}`}
            controls
            autoPlay
            width={400}
            height={400}
            className={`${isLandscape ? "h-[90vh]" : "w-[90vw]"} object-contain cursor-default`}
            // onClick={(e) => e.stopPropagation()}
          />}
          <img 
            src="/projects/close-file.svg" 
            className="w-10 h-10 lg:w-8 lg:h-8 cursor-pointer" 
            alt="close file"
            onClick={()=>setCurrentFile("")}
          />
        </div>
      </div>
    </div>
  )
}