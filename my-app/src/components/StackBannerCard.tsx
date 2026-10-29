import { StackTicketLight } from "./stackTicket"

export function StackBannerCard ( {
        typeTech,
        stackNames
    }: {
        typeTech: string;
        stackNames: string[];
    }) {
    return (
        <div className="flex flex-col  items-center relative before:absolute before:-left-2 before:top-[15%] before:h-[30%] before:w-px before:bg-[#AC7434] after:absolute after:-right-2 after:bottom-[15%] after:h-[30%] after:w-px after:bg-[#AC7434]">
            <p className="p-5 text-ml text-[#f0d8bd] xl:text-2xl font-[DM Mono] tracking-tighter">{typeTech}</p>
            <div className=" px-0 m-1 py-1 rounded-xl flex flex-col wrap-normal ">

            {stackNames.map((ticket, index) => {
                return (
                    
                    <div key={index} className="px-5 py-2">
                    <StackTicketLight text = {ticket} />
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}