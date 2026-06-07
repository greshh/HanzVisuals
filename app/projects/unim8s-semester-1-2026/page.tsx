import Image from "next/image";
import Footer from "../../footer";
import Parallax from "./parallax";
import Spotify from "../spotify";

export const metadata = {
  title: "UNIM8S Semester 1, 2026 | Photography | Hanz Visuals",
  description: "Explore sports photography for UNIM8S Semester 1 2026 for University of Auckland by Hanz Visuals, including basketball, football, futsal, and volleyball.",
};

export default function UNIM8S_Semester_1_2026() {
  return (
    <div className="relative h-fit w-screen">
      <Spotify 
        colour="1f1f1f" 
        projectKey="unim8s-semester-1-2026"
        link="https://open.spotify.com/embed/track/1fI2fpUb0zLuMPwEzIuoOr?utm_source=generator&theme=0&autoplay=1"
      />
      <Parallax />
      <div className="bg-neutral-950 w-screen h-full flex pb-[10vh] pt-5 px-6 md:px-52 flex-col gap-10 items-center z-30">
        <a 
          href="https://photos.app.goo.gl/Zu69kEwKj3LEXnnT7" 
          className="w-full h-16 md:h-20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
            <p className="text-[#1a1945] text-center font-phonk text-3xl text-wrap">{("Basketball").toUpperCase()}</p>
            <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{("A B Grade").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/DT1TTU2kSaXtJhpa7" 
          className="w-full h-20 md:h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Basketball").toUpperCase()}</p>
            <p className="text-xl text-[#1a1945] text-center font-phonk">{("C Grade").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/FFjkMDAdPtJXBikDA" 
          className="w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Football").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/PNyQJFBXNvzn8AWF6" 
          className="w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Indoor Netball").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/BmappefcQaYN6j5D8" 
          className="w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Volleyball").toUpperCase()}</p>
          </div>
        </a>
      </div>
      <Footer/>
    </div>
  );
}