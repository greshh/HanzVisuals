import Image from "next/image";
import Footer from "../../footer";
import Parallax from "./parallax";
import Spotify from "../spotify";

export const metadata = {
  title: "UTSNZ 3x3 Basketball National Championships | Hanz Visuals",
  description: "Explore sports photography and videography for UTSNZ 3x3 Basketball Tertiary National Championships 2026 by Hanz Visuals.",
};

export default function UTSNZ_3X3_2026() {
  return (
    <div className="relative h-fit w-full">
      <Spotify 
        colour="1f1f1f" 
        projectKey="utsnz-3x3-basketball-tertiary-national-championships-2026"
        link="https://open.spotify.com/embed/track/0zIZos26a6OXHhrfqJfGsD?utm_source=generator&theme=0&autoplay=1"
      />
      <Parallax />
      <Footer/>
    </div>
  );
}