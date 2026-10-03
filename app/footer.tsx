import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full py-6 bg-neutral-950 font-anonymouspro flex flex-col md:flex-row gap-0 md:gap-5 justify-center items-center text-white text-base lg:text-xl text-center">
      <p>© 2026 Hanz Visuals</p>
      <p className="hidden md:block">|</p>
      <Link href="/terms-and-conditions" className="hover:underline">
        <p className="underline md:no-underline">Terms & Conditions</p>
      </Link>
    </div>
  )
}