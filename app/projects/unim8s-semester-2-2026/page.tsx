import Image from "next/image";
import Footer from "../../footer";
import Parallax from "../parallax";
import Spotify from "../spotify";

export const metadata = {
  title: "UNIM8S Semester 2, 2026 | Photography | Hanz Visuals",
  description: "Explore sports photography for UNIM8S Semester 2 2026 for University of Auckland by Hanz Visuals, including volleyball.",
};

export default function UNIM8S_Semester_2_2026() {
  return (
    <div className="relative h-fit w-full">
      {/* <Spotify 
        colour="1f1f1f" 
        projectKey="unim8s-semester-2-2026"
        link="https://open.spotify.com/embed/track/1fI2fpUb0zLuMPwEzIuoOr?utm_source=generator&theme=0&autoplay=1"
      /> */}
      <Parallax projectKey="unim8s-semester-2-2026" />
      <div className="relative bg-[#0c0d46] flex flex-col gap-2 md:gap-5 items-center pt-5 md:pt-0 px-6 md:px-24 text-white text-center font-humane text-4xl md:text-6xl tracking-wide z-10 pb-5 h-20">
        <p className="font-bold tracking-wider leading-none mb-5">
          {"Semester 2, 2026".toUpperCase()}
        </p>
      </div>
      <div className="bg-gradient-to-b from-[#0c0d46] to-[#0a0b40] w-full h-full pb-[10vh] pt-5 px-6 md:px-52 items-center z-30">
        <h3 className="w-full text-white font-humane text-6xl md:text-9xl text-center font-bold overflow-hidden leading-none tracking-wider mb-4">{"Gallery Links".toUpperCase()}</h3>
        <div className="flex flex-col gap-10">
          <a 
            href="https://photos.app.goo.gl/5BYCYAHWrhdee1db7" 
            className="w-full h-16 md:h-20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
              <p className="text-[#1a1945] text-center font-phonk text-3xl text-wrap">{("Volleyball").toUpperCase()}</p>
            </div>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}