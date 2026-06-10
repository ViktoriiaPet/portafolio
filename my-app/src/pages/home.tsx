import { MainHeader } from "../components/headMain"
import { WorkCaseWindow } from "../components/WorkCaseWindow"
import { StackHomePagePart } from "../components/StackHomePagePart"
import { workExample } from "../assets/data"
export function Home () {
    return(
        <div >
        <MainHeader />
        <div className="bg-[#EEEAF8]/80 sm:py-6 sm:px-10 px-2 py-2">
            <div className="flex flex-col">
                <p className="uppercase text-gray-800 font-istok font-medium text-ml px-8 py-8 self-start">featured work</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {workExample.map(example => {
                        return( <WorkCaseWindow cardInformation={example} />)
                    })}
                    
                </div>
            </div>
        </div>
        <div className= "py-6 flex flex-col sm:gap-20 gap-10 px-10">
            <div className="bg-[#F3F2F5]/50 sm:p-6 p-3 rounded-2xl bg-[url('assets/Oval2.png')]/10 bg-cover bg-center flex sm:flex-row flex-col gap-20 flex-none">
                <div className="flex flex-col sm:gap-3 justify-around sm:p-2">
                    <p className="uppercase text-gray-800 font-istok font-medium text-ml py-4 px-5 sm:px-8 sm:py-8 self-start">About me</p>
                    <p className=" text-gray-500 self-start pb-1 text-justify pl-5">I'm a frontend/backend developer passionate about TypeScript,
                         Node.js, 
                        Express, and creating both learning and practical projects.</p>
                    <p className=" text-gray-500 self-start pb-1 text-justify pl-5">
                        I am a responsible and detail-oriented person with a strong interest in technology and data analysis. I learn quickly and enjoy exploring new tools and approaches in web development and analytics. 
                    </p>
                    <p className=" text-gray-500 self-start pb-2 text-justify pl-5">
                        I like working as part of a team and contributing to a positive and focused work environment. I value code clarity and well-organized data. My colleagues often highlight my friendly attitude, willingness to help, and ability to listen.
                    </p>

                    {/*<ButtonPrimary children = "More about me" />}*/}
                </div>
                
                <div className=" w-60 h-60 sm:p-2 sm:m-4 rounded-2xl bg-[url('assets/myPhoto.jpg')] bg-cover bg-center shrink-0 self-center" />
                </div>

                <StackHomePagePart />

            
        </div>
        </div>
    )
}