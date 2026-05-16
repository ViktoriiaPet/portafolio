import { MainHeader } from "../components/headMain"
import { WorkCaseWindow } from "../components/WorkCaseWindow"
import { ButtonPrimary } from "../components/Button-primary"
export function Home () {
    return(
        <div >
        <MainHeader />
        <div className="bg-[#EEEAF8]/80 p-6">
            <div className="flex flex-col">
                <p className="uppercase text-gray-800 font-istok font-medium text-ml px-8 py-8 self-start">featured work</p>
                <div className=" flex flex-row justify-around">
                    <WorkCaseWindow />
                    <WorkCaseWindow />
                    <WorkCaseWindow />
                </div>
            </div>
        </div>
        <div className= "p-6">
            <div className="bg-[#F3F2F5]/50 p-4 rounded-2xl bg-[url('assets/Oval2.png')]/10 bg-cover bg-center flex flex-row justify-around">
                <div className="flex flex-col">
                    <p>About me</p>
                    <p className="p-4">Description its abot me text.Description its abot me text.
                        Description its abot me text.Description its abot me text.
                        Description its abot me text.Description its abot me text.
                        Description its abot me text.Description its abot me text.Description its abot me text.</p>
                    <ButtonPrimary children = "More about me" />
                </div>
                <div className=" w-48 h-48 p-2 rounded-2xl bg-[url('assets/myPhoto.jpg')] bg-cover bg-center shrink-0">

                </div>
            </div>
        </div>
        </div>
    )
}