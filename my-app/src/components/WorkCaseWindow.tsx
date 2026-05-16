export function WorkCaseWindow (){
    return (
        <div className="bg-[#F9F7FC] py-8 px-2 rounded-2xl">
            <div className="bg-[#F3F2F5] p-2 rounded-2xl">
            <div className="columns-2 ">
            <div className="flex flex-col gap-2  p-2  aspect-square">
                <p className="text-ml">NameCaseCard</p>
                <p className="text-xs" >DescriptionCaseCard</p>
               
            </div>
            <div className="image aspect-square">
                image
            </div>
             </div>
              <button className="text-sm">Stacks</button>
              </div>
        </div>
    )
}