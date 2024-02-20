import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import PersonIcon from "@mui/icons-material/Person";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
//bg-[#d7ceb2]
export default function Footer() {
  return (
    <footer>
      <div className="bg-black h-1 " />
      <div className="bg-[#91a3b0] flex justify-evenly">
        <Link href="/search">
          <button className="flex">
            <SearchIcon className="w-14 h-14" />
          </button>
        </Link>{" "}
        <Link href="/account">
          <button className="text-2xl flex">
            <StarOutlineIcon className="w-14 h-14" />
          </button>
        </Link>
        <Link href="/map">
          <button className="text-2xl flex">
            <MapIcon className="w-14 h-14" />
          </button>
        </Link>
        <Link href="/account">
          <button className="text-2xl flex">
            <PersonIcon className="w-14 h-14" />
          </button>
        </Link>
        <Link href="/settings">
          <button className="text-2xl flex">
            <SettingsIcon className="w-14 h-14" />
          </button>
        </Link>
      </div>
    </footer>
  );
}
