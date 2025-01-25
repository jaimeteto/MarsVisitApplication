import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-gray-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-height-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 text-center">
        <h1 className="text-2xl font-bold">Interested in Visiting Mars?</h1>
        <p className="text-lg mt-2">Please take the following survey first.</p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/survey" legacyBehavior>
          <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Take the Survey
          </a>
        </Link>
      </main>
      
    </div>
  );
}