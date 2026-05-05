import { useEffect, useState } from "react";
import { TransitionLink } from "./transition-link";

export default function ScrollDown({url}: {url: string}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TransitionLink href={url} className="hidden md:absolute bottom-6 md:flex md:flex-col w-full justify-center gap-1 transition-opacity duration-200 z-30 animate-float" style={{ opacity: scrollY <= 0 ? 1 : 0 }}>
      <p className="text-white text-center font-anonymouspro">scroll down</p>
      <img src="/home/arrow.svg" alt="arrow down" className="mx-auto"/>
    </TransitionLink>
  );
}