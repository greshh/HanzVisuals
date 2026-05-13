import Image from "next/image";
import Footer from "../../footer";
import { micdUpProjects } from "./projects";

export const metadata = {
  title: "College Sport Auckland Mic'd Up Volleyball Edits | Hanz Visuals",
  description: "Explore Mic'd Up video edits by Hanz Visuals for College Sport Auckland premier volleyball games.",
};

export default function Micd_Up() {
  return (
    <div className="h-fit w-full">
      <div className="bg-neutral-950 w-full h-full flex bg-gradient-to-b from-neutral-950 to-neutral-500 py-[10vh] px-52 flex-col gap-10 items-center">
        <h1 className="font-phonk text-4xl md:text-5xl text-white text-center tracking-wider">{("Micd Up").toUpperCase()}</h1>
        <div className="w-fit">
          <div className="flex flex-wrap gap-5 lg:gap-9 xl:gap-9 font-anonymouspro">
            {micdUpProjects.map(p => (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full md:w-60"
                key={p.name}
              >
                <div 
                  className="relative group flex flex-col items-end justify-end text-right h-full md:h-80 object-cover transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                  key={p.name}
                >
                  <Image 
                    src={`/projects/cover/micd-up/${p.key}.jpg`}
                    alt={p.name}
                    width={240}
                    height={320}
                    quality={100}
                    sizes="(min-width: 768px) 240px, 100vw"
                    className="absolute top-0 object-cover z-0 h-full md:h-80 w-full"
                  />
                  <div className="bg-gradient-to-t from-neutral-300 to-[#e5e5e5e1] w-full md:w-60 h-40 md:h-fit p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 z-10 flex flex-col justify-center items-end">
                    <p className="text-black leading-none font-phonk text-2xl text-ellipsis">{p.name.toUpperCase()}</p>
                    <p className="text-black text-base font-semibold">{p.date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}