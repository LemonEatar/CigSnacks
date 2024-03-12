import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white">
      <div>
        <div className="bg-[#91a3b0] py-5 flex items-center justify-between w-full font-bold text-2xl px-4">
          <Link href={"/"}>
            <ArrowBackIosIcon />
          </Link>
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
            <div className="h-0.5 bg-black w-full" />
          </div>
        </div>
        <div>
          <div className="px-2">
            <div className="font-semibold">Kamera</div>
            <div className="text-gray-500">
              Sie können ein Foto aufnehmen, um Fotos für Ihre favorisierten
              Automaten zu verwenden.
            </div>
            <div className="h-0.5 bg-black w-full" />
          </div>
        </div>
        <div>
          <div className="px-2">
            <div className="font-semibold">Fotos</div>
            <div className="text-gray-500">
              Sie können ein Foto auswählen, welches für Ihre favorisierten
              Automaten verwendet wird.{" "}
            </div>
            <div className="h-0.5 bg-black w-full" />
          </div>
        </div>
        <div className=" px-2 text-xl text-bold bg-gray-400 py-1 flex w-full tracking-widest justify-start font-gray-200">
          Kontakt / Über
        </div>
        <div className="px-2">
          <div className="font-semibold">Kontakt</div>
          <div className="h-0.5 bg-black w-full" />
        </div>
        <div className="px-2">
          <div className="font-semibold">Info</div>
          <div className="h-0.5 bg-black w-full" />
        </div>
        <div className="px-2">
          <div className="font-semibold">CigSnacks empfehlen</div>
          <div className="h-0.5 bg-black w-full" />
        </div>
        <div>
          <div className=" px-2 text-xl text-bold bg-gray-400 py-1 flex w-full tracking-widest justify-start font-gray-200">
            Allgemein
          </div>
          <div className="px-2">
            <div className="font-semibold">Whats new</div>
            <div className="h-0.5 bg-black w-full" />
          </div>
          <div className="px-2">
            <div className="font-semibold">Sprache</div>
            <div className="h-0.5 bg-black w-full" />
          </div>
          <div className="px-2">
            <div className="font-semibold">Hilfe</div>
            <div className="h-0.5 bg-black w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
