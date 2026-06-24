import type { ProjectCardType } from "../types/tickets"
import { StackTicket } from "./stackTicket"

export function WorkCaseWindow ({ cardInformation }: { cardInformation: ProjectCardType }){
    const {name, description, image, stack, link} = cardInformation
    return (
        <div className="bg-[#F9F7FC]/30 sm:py-8 sm:px-2 rounded-2xl">
            <div className="bg-[#F3F2F5]/30 p-2 rounded-2xl h-full flex flex-col">
            <div className="grid grid-cols-2">
            <div className="flex flex-col sm:gap-2  sm:p-2">
                <p className="text-ml text-neutral-800 font-semibold tracking-wide">{name}</p>
                <p className="text-xs text-neutral-800" >{description}</p>
            </div>
            <div className="image aspect-square">
                <img key={link} src = {image} alt = "Image of work" />
            </div>
             </div>
             <div className="flex flex-col gap-2 justify-center py-6 mt-auto">
                
                <div className="flex flex-col  gap-1 sm:gap-2 py-4 justify-center items-center">
                <a href={link} target="_blank" rel="noreferrer" className="text-neutral-700">
                    Go to GitHub
                </a>
                {cardInformation.DeployLink && <a href={cardInformation.DeployLink} target="_blank" rel="noreferrer" className="text-neutral-700">
                    Go to Deploy
                </a>}
                {cardInformation.DocumentationLink && <a href={cardInformation.DocumentationLink} target="_blank" rel="noreferrer" className="text-neutral-700">
                    Go to Documentation
                </a>}
                </div>
                <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center flex-wrap">
                {stack.map(ticket => {
                    return ( <StackTicket key={ticket} text={ticket} /> )
                })
                } 
                </div>
                </div>
              </div>
        </div>
    )
}