import { StackBannerCard } from "./StackBannerCard"
import { FRONTEND } from "../assets/data"
import { BACKEND } from "../assets/data"
import { dataBase } from "../assets/data"
import { tools } from "../assets/data"
import { tecnologies } from "../assets/data"
export function StackHomePagePart() {
    return (
    <section className="bg-[#044953] p-7  flex flex-col w-full items-center">
        <div className="max-w-[1514px] flex flex-col xl:px-8">
        <p className="uppercase text-[#F0D8BD]  font-[DM Mono] xl:text-4xl xl:px-12 2xl:text-6xl tracking-tighter text-ml sm:px-8 sm:py-8 relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-[#AC7434] px-8 py-2 self-start">My <span className="text-[#AC7434]">Stack</span> </p>
        <div className="grid sm:grid-cols-5 gap-4 pt-3 xl:pt-10">
            <StackBannerCard typeTech = "FRONTEND" stackNames = {FRONTEND} />

            <StackBannerCard typeTech = "BACKEND" stackNames = {BACKEND} />

            <StackBannerCard typeTech = "DATABASES & TESTING" stackNames = {dataBase} />

            <StackBannerCard typeTech = "TOOLS & WORKFLOW" stackNames = {tools} />

            <StackBannerCard typeTech = "DEVELOPMENT PRACTICES" stackNames = {tecnologies} />
        </div>
        </div>
    </section>
    )
}