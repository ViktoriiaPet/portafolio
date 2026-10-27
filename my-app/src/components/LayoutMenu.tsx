import { Home } from "../pages/home";
import { MenuPrimary } from "./menu";

export function LayoutMenu () {
    return (
        <div className=" aspect-3/1 bg-cover bg-center bg-[#F0D8BD]">
      <MenuPrimary />
      <Home />
    </div>
    )
}