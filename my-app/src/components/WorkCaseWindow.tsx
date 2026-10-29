import type { ProjectCardType } from "../types/tickets"
import { StackTicket } from "./stackTicket"
import type { WorkLayout } from "../types/tickets";

export function WorkCaseWindow ({ cardInformation }: { cardInformation: ProjectCardType }){
    const {name, description, image, stack, link} = cardInformation

    const layoutClasses: Record<WorkLayout, string> = {
    featured: "lg:col-span-3",
    wide: "lg:col-span-2",
    standard: "lg:col-span-1",
};

    return (
        <div className={` sm:py-8 sm:px-2 xl:px-5    ${layoutClasses[cardInformation.layout]}`}>
            <div className=" p-2 flex flex-col border-5 border-[#a65745]">
            <div className="flex flex-col relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-[#AC7434]">
                <div className=" box-border p-1">
                <img key={link} src = {image} alt = "Image of work" />
            </div>
            <div className="flex flex-col pl-2 sm:gap-2 xl:gap-5 sm:p-2 xl:p-5 ">
                
                <p className="text-ml text-[#0b2639] xl:text-3xl tracking-wide text-left font-[DM Mono] tracking-tighter">{name}</p>
                <p className="text-xs text-[#0b2639] xl:text-2xl text-left font-[Manrope]" >{description}</p>
            </div>

             </div>
             <div className="flex flex-col gap-2 justify-center px-4 py-6">
                
                <div className="flex sm:flex-row flex-col  gap-1 sm:gap-5 py-4 justify-center sm:justify-between items-center">
                <a href={link} target="_blank" rel="noreferrer" className="text-[#AC7434] text-lg xl:text-xl">
                    Go to GitHub
                </a>
                {cardInformation.DeployLink && <a href={cardInformation.DeployLink} target="_blank" rel="noreferrer" className="text-[#AC7434] text-lg xl:text-xl">
                    Deploy
                </a>}
                {cardInformation.DocumentationLink && <a href={cardInformation.DocumentationLink} target="_blank" rel="noreferrer" className="text-[#AC7434] text-lg xl:text-xl">
                    Documentation
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