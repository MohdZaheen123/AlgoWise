"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
export default function page() {
  const words = [
    {
      text: "Nothing",
      className: "text-white",
    },
    {
      text: "Up",
      className: "text-white",
    },
    {
      text: "Here,",
      className: "text-white",
    },
    {
      text: "Explore",
      className: "text-white",
    },
    {
      text: "Other",
      className: "text-white",
    },
    {
      text: "Sections.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href='/blogs' className="flex justify-center items-center w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Back
        </Link>
        <Link href='/' className="w-28 h-10 flex justify-center items-center rounded-xl bg-white text-black border border-black  text-sm">
          Home
        </Link>
      </div>
    </div>
  );
}
