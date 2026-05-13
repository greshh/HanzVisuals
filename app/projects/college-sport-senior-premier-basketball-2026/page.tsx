import { Suspense } from "react";
import ClientSeniorPrems2026 from "./page-client";

export const metadata = {
  title: "Senior Premier Basketball 2026 | Hanz Visuals",
  description: "Explore sports photography and graphics for College Sport Auckland Senior Premier boys and girls basketball season by Hanz Visuals.",
};

export default function SeniorPrems2026() {
  return (
    <Suspense fallback={<div></div>}>
      <ClientSeniorPrems2026 />
    </Suspense>
  );
}