import type { ProjectCardType } from "../types/tickets"
import { StackTicket } from "./stackTicket"

export function WorkCaseWindow ({ cardInformation }: { cardInformation: ProjectCardType }){
    const {name, description, image, stack, link} = cardInformation
    return (
        <div className="bg-[#F9F7FC] py-8 px-2 rounded-2xl w-[30vw]">
            <div className="bg-[#F3F2F5] p-2 rounded-2xl h-[32vh]">
            <div className="columns-2 ">
            <div className="flex flex-col gap-2  p-2  aspect-square">
                <p className="text-ml">{name}</p>
                <p className="text-xs" >{description}</p>
               
            </div>
            <div className="image aspect-square">
                <img src = {image} alt = "Image of work" />
            </div>
             </div>
                {stack.map(ticket => {
                    return ( <StackTicket text={ticket} /> )
                })
                }
                <button>Link to gitHub</button>
              </div>
        </div>
    )
}