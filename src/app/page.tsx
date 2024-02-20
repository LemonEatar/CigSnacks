import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="pb-16">
          <div className="flex w-full justify-center text-8xl font-impact font-bold pb-5 pt-5">
            CigSnacks
          </div>
          <div className="flex w-full font-semibold font-impact justify-center text-3xl">
            The Easiest Way to find Snacks
          </div>
        </div>
          <Image src="/lupe.png" alt="sas" width="180" height="180"/>
      </div>
    </div>
  );
}
