import { StackBannerCard } from "./StackBannerCard"
import { stackFrontend } from "../assets/data"
import { stackBackend } from "../assets/data"
import { dataBase } from "../assets/data"
import { tools } from "../assets/data"
import { tecnologies } from "../assets/data"
export function StackHomePagePart() {
    return (
    <div className="bg-[#F3F2F5]/50 p-4 rounded-2xl flex flex-col">
        <p className="uppercase text-gray-800 font-istok font-medium text-ml px-8 py-8 self-start">My Stack</p>
        <div className="grid sm:grid-cols-5">
            <StackBannerCard typeTech = "Frontend" stackNames = {stackFrontend} />

            <StackBannerCard typeTech = "Backend" stackNames = {stackBackend} />

            <StackBannerCard typeTech = "Data Bases" stackNames = {dataBase} />

            <StackBannerCard typeTech = "Tools" stackNames = {tools} />

            <StackBannerCard typeTech = "Tecnologes" stackNames = {tecnologies} />
        </div>
    </div>
    )
}