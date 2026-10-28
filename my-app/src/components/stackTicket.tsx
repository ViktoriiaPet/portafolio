import type { StackTicketProps } from "../types/tickets"

export function StackTicket({text}: StackTicketProps){
    return(
        <div className="  py-0 px-1 sm:px-2  inline-block relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-[#102f46]">
            <p className="text-sm xl:text-lg text-[#102f46] "> {text} </p>
        </div>
    )
}