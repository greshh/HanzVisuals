import Image from "next/image";
import Footer from "../../footer";

export default function Senior_Prems_2026() {
  return (
    <div className="h-full w-full">
      <div className="bg-neutral-950 w-full min-h-[100vh] h-full flex bg-gradient-to-b from-[#2f51cc] to-[#0d1663] px-52 flex-col gap-10 items-center justify-center">
        <h1 className="font-phonk text-4xl md:text-5xl text-white text-center tracking-wider">{("Senior Prems 2026").toUpperCase()}</h1>
        <div className="flex flex-col w-fit h-fit md:w-full md:h-40 justify-center items-center mb-32 gap-20 md:gap-10">
          <a 
            href="https://photos.app.goo.gl/w9q17J9M1G1EoeFW6" 
            className="w-fit md:w-full h-16 md:h-20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-fit h-fit md:h-full p-3 md:w-full md:p-0 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-10 hover:bg-[#bcc7f5] transition-hover duration-500">
              <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{("Round 1").toUpperCase()}</p>
              <p className="text-[#1a1945] text-center font-phonk text-3xl text-wrap">{("MAGS").toUpperCase()}</p>
              <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{("May 1").toUpperCase()}</p>
            </div>
          </a>
          <a 
            href="https://photos.app.goo.gl/J1yfBT16cHX1sAoh7" 
            className="w-fit md:w-full h-16 md:h-20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-fit h-fit md:h-full p-3 md:w-full md:p-0 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-10 hover:bg-[#bcc7f5] transition-hover duration-500">
              <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{("Round 2").toUpperCase()}</p>
              <p className="text-[#1a1945] text-center font-phonk text-3xl text-wrap">{("Rosmini").toUpperCase()}</p>
              <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{("May 8").toUpperCase()}</p>
            </div>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}