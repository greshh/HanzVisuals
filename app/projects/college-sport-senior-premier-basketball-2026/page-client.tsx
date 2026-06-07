"use client"
import Image from "next/image";
import Footer from "../../footer";
import FileView from "../file-view";
import { seniorPrems2026Projects } from "./projects";
import { useEffect, useState } from "react";
import Parallax from "./parallax";
import Spotify from "../spotify";

export default function ClientSeniorPrems2026() {
const [currentFile, setCurrentFile] = useState("");
  
  const openFile = (name: string) => {
    setCurrentFile(name);
  }

  useEffect(()=>{
  },[currentFile])

  return (
    <div className="h-full w-full relative">
      {currentFile != "" && <FileView name={currentFile} type={currentFile.slice(-3)} setCurrentFile={setCurrentFile}/>}
      <Spotify 
        colour="1f1f1f" 
        projectKey="college-sport-senior-premier-basketball-2026"
        link="https://open.spotify.com/embed/track/1AFKbnV49aMFAzZouEaMEP?utm_source=generator&theme=0&autoplay=1"
      />
      <Parallax />
      <div className="relative w-full min-h-[100vh] h-full flex bg-gradient-to-b from-[#0166b4] to-[#01487E] px-10 md:px-52 flex-col gap-10 items-center justify-center py-10 md:pb-20 md:pt-0 z-30">
        <h1 className="font-humane text-6xl md:text-8xl font-semibold text-white text-center tracking-wider">
          {("Senior Premier Basketball 2026").toUpperCase()}
        </h1>
        <div className="flex flex-col h-fit w-full justify-center items-center gap-7 md:gap-10">
          {seniorPrems2026Projects.map((project) => (
            <a
              key={project.round}
              href={project.link}
              className="w-full h-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
<<<<<<< Updated upstream
              <div className="w-full h-fit md:h-full p-3 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-10 hover:bg-[#bcc7f5] transition-hover duration-500">
                <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{`Round ${project.round}`.toUpperCase()}</p>
                <p className="text-[#1a1945] text-center font-phonk text-3xl text-wrap">{project.venue.toUpperCase()}</p>
                <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{new Date(project.date).toLocaleDateString("en-US", {
=======
              <div className="w-full h-fit md:h-full p-3 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-10 hover:bg-[#B7D7F3] transition-hover duration-500">
                <p className="text-xl text-[#0f1760] text-center font-phonk text-wrap">{`Round ${project.round}`.toUpperCase()}</p>
                <div className="flex flex-row gap-3 items-center justify-center">
                  <p className="text-[#0f1760] text-center font-phonk text-3xl text-wrap">{project.home.toUpperCase()}</p>
                  {project.away && <p className="hidden md:inline text-lg text-[#0f1760] text-center font-phonk text-wrap">VS</p>}
                  <p className="hidden md:inline text-[#0f1760] text-center font-phonk text-3xl text-wrap">{project.away?.toUpperCase()}</p>
                </div>
                <p className="text-xl text-[#0f1760] text-center font-phonk text-wrap">{new Date(project.date).toLocaleDateString("en-US", {
>>>>>>> Stashed changes
                  month: "long",
                  day: "numeric",
                }).toUpperCase()}</p>
              </div>
            </a>
          ))}
        </div>
        <div>
          <h2 className="font-phonk text-3xl md:text-4xl text-white text-center tracking-wider my-5">{("Graphics").toUpperCase()}</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {/* NOTE: When adding graphics, put them in group of fours by duplicating the outside container. */}
            <div className="grid gap-1 w-fit mx-auto">
                <Image 
                  src={`/projects/graphics/college-sport-senior-premier-basketball-2026/hunter-johns.jpg`}
                  alt={"Hunter Johns from Rosmini College. Round 1 vs Mount Albert Grammar School. Senior Premier Basketball 2026"}
                  width={240}
                  height={320}
                  quality={100}
                  sizes="(min-width: 768px) 240px, 100vw"
                  onClick={() => openFile("college-sport-senior-premier-basketball-2026/hunter-johns.jpg")}
                  className="object-contain z-0 h-full md:h-80 w-full drop-shadow-xl cursor-pointer hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"
                />
            </div>
            <div className="grid gap-1 w-fit mx-auto">
              <Image 
                src={`/projects/graphics/college-sport-senior-premier-basketball-2026/dangerous-duo.jpg`}
                alt={"Cooper Lepou (41 points, 8 threes, 6 assists) and Hunter Johns (33 points, 16 rebounds) from Rosmini College. Round 3 vs Sacred Heart College. Senior Premier Basketball 2026"}
                width={240}
                height={320}
                quality={100}
                sizes="(min-width: 768px) 240px, 100vw"
                onClick={() => openFile("college-sport-senior-premier-basketball-2026/dangerous-duo.jpg")}
                className="object-contain z-0 h-full md:h-80 w-full drop-shadow-xl cursor-pointer hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"
              />
            </div>
        </div>
      </div>

      </div>
      <Footer/>
    </div>
  );
}