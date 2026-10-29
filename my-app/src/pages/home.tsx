import { MainHeader } from "../components/headMain"
import { WorkCaseWindow } from "../components/WorkCaseWindow"
import { StackHomePagePart } from "../components/StackHomePagePart"
import { workExample } from "../assets/data"
import { Footer } from "../components/Footer"
export function Home () {
    return(
        <main className="flex flex-col items-center sm:px-0 px-2">
        <MainHeader />
        <section className=" bg-[#F0D8BD] sm:py-6 sm:px-10 px-2 py-2">
            <div className="flex flex-col  max-w-[1514px] xl:p-8">
                <p className="uppercase text-[#0b2639] font-[DM Mono] tracking-tighter xl:text-4xl 2xl:text-6xl font-medium text-ml px-8 py-8 self-start">featured <span className="text-[#a65745]">work</span></p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {workExample.map(example => {
                        return( <WorkCaseWindow key={example.link} cardInformation={example} />)
                    })}
                    
                </div>
            </div>
        </section>

            <section className="bg-[#7c8056] sm:p-6 p-3 w-full flex flex-col items-center">
                <div className="flex items-center sm:flex-row flex-col gap-20 flex-none max-w-[1514px] xl:p-8">
                <div className=" flex flex-col sm:gap-3 justify-around p-2">
                    <p className="uppercase text-[#F0D8BD]  font-[DM Mono] xl:text-4xl 2xl:text-6xl tracking-tighter text-ml py-4 px-5 sm:px-8 sm:py-8 self-start relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-px after:bg-[#044953]">About <span className="text-[#044953]">me</span></p>
                    <p className=" text-[#F0D8BD] self-start font-[Manrope] xl:text-3xl pb-1 pt-4 text-justify px-5">I'm a Full Stack Developer focused on building web applications with <span className="text-[#044953]">TypeScript, React, Node.js, and PostgreSQL</span> . 
                        I enjoy turning ideas into functional products and working across both frontend and backend development.</p>
                    <p className=" text-[#F0D8BD] self-start font-[Manrope] xl:text-3xl pb-1 text-justify px-5">
                        My current focus is creating scalable applications, REST APIs, and improving code quality through testing, clean architecture, and modern development practices.
                    </p>
                    <p className=" text-[#F0D8BD] font-[Manrope] xl:text-3xl self-start pb-2 text-justify px-5">
                       I'm looking for opportunities to grow as <span className="text-[#044953]"> a software engineer</span>, contribute to real-world products, 
                       and collaborate with teams that value learning, ownership, and continuous improvement. </p>

                    {/*<ButtonPrimary children = "More about me" />}*/}
                </div>
                
                <div className=" w-100 h-100 sm:p-2 sm:m-4  bg-[url('assets/photoAboutRemove.png')] bg-cover bg-center shrink-0 self-center border-b-10 border-[#044953]" />
                </div>
                </section>

                <StackHomePagePart />
                <Footer />
            

        </main>
    )
}