import { Suspense } from "react";
import ProjectsClient from "./page-client";

export const metadata = {
  title: "Projects | Sports Photography | Hanz Visuals",
  description: "Explore sports photography and videography projects by Hanz Visuals, featuring basketball, volleyball, athletes, and sporting events across Auckland.",
};

export default function Projects() {
  return (
    <Suspense fallback={<div></div>}>
      <ProjectsClient />
    </Suspense>
  );
}