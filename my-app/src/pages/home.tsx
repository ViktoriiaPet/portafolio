import { MainHeader } from "../components/headMain"
import { WorkCaseWindow } from "../components/WorkCaseWindow"
import { ButtonPrimary } from "../components/Button-primary"
import { StackTicket } from "../components/stackTicket"
import { workExample } from "../assets/data"
export function Home () {
    return(
        <div >
        <MainHeader />
        <div className="bg-[#EEEAF8]/80 py-6 px-10">
            <div className="flex flex-col">
                <p className="uppercase text-gray-800 font-istok font-medium text-ml px-8 py-8 self-start">featured work</p>
                <div className="grid grid-cols-3 gap-6">
                    {workExample.map(example => {
                        return( <WorkCaseWindow cardInformation={example} />)
                    })}
                    
                </div>
            </div>
        </div>
        <div className= "py-6 flex flex-col gap-20 px-10">
            <div className="bg-[#F3F2F5]/50 p-6 rounded-2xl bg-[url('assets/Oval2.png')]/10 bg-cover bg-center flex flex-row gap-20 flex-none">
                <div className="flex flex-col gap-3 justify-around p-2">
                    <p className="uppercase text-gray-800 font-istok font-medium text-ml px-8 py-8 self-start">About me</p>
                    <p className=" text-gray-500 self-start pb-5 text-left pl-5">Description its abot me text.Description its abot me text.
                        Description its abot me text.Description its abot me text.
                        Description its abot me text.Description its abot me text.
                        Description its abot me text.Description its abot me text.Description its abot me text.</p>
                    <ButtonPrimary children = "More about me" />
                </div>
                
                <div className=" w-60 h-60 p-2 m-4 rounded-2xl bg-[url('assets/myPhoto.jpg')] bg-cover bg-center shrink-0" />
                </div>

                <div className=" grid grid-cols-2 bg-[#F3F2F5]/50 p-4 rounded-2xl">
                    <div className="flex flex-col">
                        <p>Tech I work with</p>
                       <p>Randow large frase</p>
                    </div>
                    <div className="flex flex-row gap-3 flex-wrap items-center">
                        <StackTicket text = "React" />
                        <StackTicket text = "Nest" />
                        <StackTicket text = "Express" />
                        <StackTicket text = "PostgreSQL" />
                        <StackTicket text = "Node" />
                    </div>
                </div>

            
        </div>
        </div>
    )
}