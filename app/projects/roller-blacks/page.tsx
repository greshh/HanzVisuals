import Image from "next/image";
import Footer from "../../footer";

export const metadata = {
  title: "NZ Roller Blacks Camps | Photography & Videography | Hanz Visuals",
  description: "Explore sports photography and videography by Hanz Visuals for the New Zealand Roller Blacks wheelchair basketball team.",
};

export default function RollerBlacks() {
return (
    <div className="h-full w-full">
      <div className="w-full h-fit flex bg-gradient-to-b from-neutral-950 to-neutral-500 px-7 md:px-52 flex-col gap-10 items-center justify-center py-20">
        <h1 className="font-phonk text-4xl md:text-5xl text-white text-center tracking-wider">{("Roller Blacks").toUpperCase()}</h1>
        <div className="flex flex-col w-full h-fit md:w-full justify-center items-center gap-10">
          <a 
            href="https://photos.app.goo.gl/32uqUpvrDBCBm93z9" 
            className="w-full h-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full bg-white flex flex-col md:flex-row items-center justify-center rounded-lg hover:bg-neutral-300 transition-hover duration-500">
              <p className="text-neutral-950 text-center font-phonk text-3xl text-wrap">{("Camp 1").toUpperCase()}</p>
            </div>
          </a>
          <a 
            href="https://photos.app.goo.gl/N6dNd1RHgbnY7G4n6" 
            className="w-full h-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full bg-white flex flex-col md:flex-row items-center justify-center rounded-lg hover:bg-neutral-300 transition-hover duration-500">
              <p className="text-neutral-950 text-center font-phonk text-3xl text-wrap">{("Camp 2").toUpperCase()}</p>
            </div>
          </a>
          <a 
            href="https://drive.google.com/file/d/1NOFDfogoYC4FXFRZpWfVXVtMP8t1FyM_/view?usp=drive_link" 
            className="w-full h-16 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full bg-white flex flex-col md:flex-row items-center justify-center rounded-lg hover:bg-neutral-300 transition-hover duration-500">
              <p className="text-neutral-950 text-center font-phonk text-3xl text-wrap">{("Hype Edit").toUpperCase()}</p>
            </div>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}