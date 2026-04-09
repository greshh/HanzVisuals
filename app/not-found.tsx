import { TransitionLink } from "./transition-link"
import Footer from "./footer"

export default function NotFoundPage() {
  return (
    <>
    <div className="h-[90vh] w-full bg-neutral-950 flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-phonk font-bold text-white">{("Page not found").toUpperCase()}</h1>
      <TransitionLink href="/" className="text-white font-anonymouspro italic">back to home</TransitionLink>
    </div>
    <Footer/>
    </>
  )
}