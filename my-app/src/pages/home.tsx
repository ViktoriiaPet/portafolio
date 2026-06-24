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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {workExample.map(example => {
                        return( <WorkCaseWindow key={example.link} cardInformation={example} />)
                    })}
                    
                </div>
            </div>
        </div>
        <div className= "py-6 flex flex-col sm:gap-20 gap-10 px-10">
            <div className="bg-[#F3F2F5]/50 sm:p-6 p-3 rounded-2xl bg-[url('assets/Oval2.png')]/10 bg-cover bg-center flex sm:flex-row flex-col gap-20 flex-none">
                <div className="flex flex-col sm:gap-3 justify-around sm:p-2">
                    <p className="uppercase text-gray-800 font-istok font-medium text-ml py-4 px-5 sm:px-8 sm:py-8 self-start">About me</p>
                    <p className=" text-gray-700 self-start pb-1 text-justify pl-5">I'm a Full Stack Developer focused on building web applications with TypeScript, React, Node.js, and PostgreSQL. 
                        I enjoy turning ideas into functional products and working across both frontend and backend development.</p>
                    <p className=" text-gray-700 self-start pb-1 text-justify pl-5">
                        My current focus is creating scalable applications, REST APIs, and improving code quality through testing, clean architecture, and modern development practices.
                    </p>
                    <p className=" text-gray-700 self-start pb-2 text-justify pl-5">
                       I'm looking for opportunities to grow as a software engineer, contribute to real-world products, 
                       and collaborate with teams that value learning, ownership, and continuous improvement. </p>

                    {/*<ButtonPrimary children = "More about me" />}*/}
                </div>
                
                <div className=" w-60 h-60 sm:p-2 sm:m-4 rounded-2xl bg-[url('assets/myPhoto.jpg')] bg-cover bg-center shrink-0 self-center" />
                </div>

                <StackHomePagePart />

            
        </div>
        </div>
    )
}