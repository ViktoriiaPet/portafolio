import type { StackTicketProps } from "../types/tickets"

export function StackTicket({text}: StackTicketProps){
    return(
        <div className="shadow-[3px_3px_20px_0px_rgba(0,0,0,0.05)] bg-gray-200/50 border border-solid border-gray-300/50  py-0 px-1 sm:px-2 hover:bg-gray-200/50 inline-block rounded-xl relative">
            <p className="text-sm text-gray-500"> {text} </p>
        </div>
    )
}