import { StackTicket } from "./stackTicket"

export function StackBannerCard ( {
        typeTech,
        stackNames
    }: {
        typeTech: string;
        stackNames: string[];
    }) {
    return (
        <div className="flex flex-col  items-center border border-neutral-500/10  rounded-xl bg-purple-300/5">
            <p className="p-5 text-ml text-neutral-800  ">{typeTech}</p>
            <div className=" px-0 m-1 py-1 rounded-xl flex flex-col wrap-normal ">

            {stackNames.map((ticket, index) => {
                return (
                    
                    <div key={index} className="px-5 py-2">
                    <StackTicket text = {ticket} />
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}