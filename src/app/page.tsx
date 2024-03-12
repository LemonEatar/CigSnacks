import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="w-full ">
        <div className="bg-[#889EA7] py-4 px-5 flex justify-evenly rounded-full">
          <div className="px-4">
            <Link href="https://www.youtube.com/@Cigsnacks">YouTube</Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/cigsnacks">Instagram</Link>
          </div>
        </div>
        <div className="flex justify-center h-full items-center">
          <div className="pb-16">
            <div className="flex justify-center text-8xl font-impact font-bold pb-5 pt-5">
              CigSnacks
            </div>
            <div className="flex font-semibold font-impact justify-center text-3xl">
              - The Easiest Way to find Snacks -
            </div>
            <div className="pt-24 flex justify-center">
              <div className="p-5 border-4 rounded-full border-black">
                <Link
                  href="/map"
                  className="bg-[#889EA7] p-3 rounded-full text-2xl font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
