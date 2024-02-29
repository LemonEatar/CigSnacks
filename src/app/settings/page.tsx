import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Page() {
  return (
    <div>
      <div>
        <div className="bg-[#91a3b0] py-5 flex items-center justify-between w-full font-bold text-2xl px-4">
          <ArrowBackIosIcon />
          <div className="mx-auto">Einstellungen</div>
        </div>{" "}
        <div className="bg-black h-1 w-full" />
      </div>
    </div>
  );
}
