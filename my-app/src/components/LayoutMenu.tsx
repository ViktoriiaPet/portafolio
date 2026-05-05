import { Home } from "../pages/home";
import { MenuPrimary } from "./menu";

export function LayoutMenu () {
    return (
        <div className=" aspect-3/1 bg-[url('assets/mainBanner.png')] bg-cover bg-center">
      <MenuPrimary />
      <Home />
    </div>
    )
}