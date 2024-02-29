import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Page() {
  return (
    <div className="bg-white">
      <div>
        <div className="bg-[#91a3b0] py-5 flex items-center justify-between w-full font-bold text-2xl px-4">
          <ArrowBackIosIcon />
          <div className="mx-auto">Einstellungen</div>
        </div>
        <div className="bg-black h-1 w-full" />
        <div>
          <div className=" px-2 text-xl text-bold bg-gray-400 py-1 flex w-full tracking-widest justify-start font-gray-200">
            Berechtigungen
          </div>
          <div className="px-2">
            <div className="font-semibold">Mitteilung</div>
            <div className="text-gray-500">
              CigSnacks sendet Ihnen Mitteilungen über neue Automaten in Ihrer
              Nähe sowie Neuerungen auf der Website.
            </div>
            <div className="h-1 bg-black w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
