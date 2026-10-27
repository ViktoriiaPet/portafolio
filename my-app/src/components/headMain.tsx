    import { ButtonPrimary } from "./Button-primary"
    import { StackBanner } from "./StackBanner"
    import myPhoto from '../assets/mu-photo.png'
    export function MainHeader() {


        return(
            <header className="bg-[#044953] w-full">
            <div className="grid sm:grid-cols-2 gap-1">
            <div className="bg-transparent p-8 pb-6 sm:col-span-1">
            <div className="flex flex-col sm:justify-center pl-3 gap-3">
                <div>
                <p className=" tracking-tight text-left font-[DM Mono] font-medium sm:text-5xl text-[#F0D8BD] pb-2 text-3xl">
                   Full Stack Developer focused on <span className="text-blue-300">TypeScript</span> and <span className="text-blue-300">Node.js</span>
                </p></div>
                <div>
                <p className="tracking-tight text-left font-istok font-medium text-sm text-[#F0D8BD] box-border">
                    I create modern application with clean code, great perfomance, and influence experience.
                </p>
                </div>
            </div>

            <div className="p-4 flex flex-row gap-6 justify-center flex-wrap items-center">
                <a href="./CV_EN_Correct_Victoria.pdf" download><ButtonPrimary children = "Download my CV ENG" /></a>
                <a href="./CV_ES_Correct_Victoria.pdf" download><ButtonPrimary children = "Download my CV ESP" /></a>
            </div>
                <a href="https://github.com/ViktoriiaPet"><ButtonPrimary children = "My GitHub"/></a>
            
            </div>
            <div className="flex justify-center items-center">
                <div className="w-xs border-10 border-[#AC7434]">
                    <img src={myPhoto} alt="my photo" />
                </div>
            </div>
            </div>
            <StackBanner />
            </header>
        )
    }