import type { ProjectCardType } from "../types/tickets"
import { StackTicket } from "./stackTicket"

export function WorkCaseWindow ({ cardInformation }: { cardInformation: ProjectCardType }){
    const {name, description, image, stack, link} = cardInformation
    return (
        <div className="bg-[#F9F7FC]/30 py-8 px-2 rounded-2xl">
            <div className="bg-[#F3F2F5]/30 p-2 rounded-2xl">
            <div className="columns-2 ">
            <div className="flex flex-col gap-2  p-2  aspect-square">
                <p className="text-ml text-neutral-800 font-semibold tracking-wide">{name}</p>
                <p className="text-xs text-neutral-800" >{description}</p>
               
            </div>
            <div className="image aspect-square">
                <img src = {image} alt = "Image of work" />
            </div>
             </div>
             <div className="flex flex-row gap-2 justify-center py-2">
                {stack.map(ticket => {
                    return ( <StackTicket text={ticket} /> )
                })
                }
                <a href={link} target="_blank" rel="noreferrer" className="text-neutral-700">
                    Go to GitHub
                </a>
                </div>
              </div>
        </div>
    )
}