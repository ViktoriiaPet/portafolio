import type { StackTicketProps } from "../types/tickets"

export function StackTicket({text}: StackTicketProps){
    return(
        <div className="bg-gray-200 border border-solid border-gray-400  py-0 px-2 hover:bg-gray-400/50 inline-block rounded-xl relative">
            <p className="text-sm text-gray-500"> {text} </p>
        </div>
    )
}