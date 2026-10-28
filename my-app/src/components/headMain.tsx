    import { ButtonPrimary } from "./Button-primary"
    import { StackBanner } from "./StackBanner"
    import myPhoto from '../assets/photo-with-bg.png'
    export function MainHeader() {


        return(
            <header className="bg-[#044953] w-full min-h-[60vh] flex flex-col items-center">
            <div className="grid sm:grid-cols-2 gap-1 2xl:gap-5 max-w-[1514px]">
            <div className="bg-transparent p-8 pb-6 sm:col-span-1">
            <div className="flex flex-col sm:justify-center pl-3 gap-3 2xl:gap-10">
                <div>
                <p className="xl:text-7xl 2xl:text-7xl tracking-tight text-left font-[DM Mono] font-medium sm:text-5xl text-[#F0D8BD] pb-2 text-3xl">
                   Full Stack Developer focused on <span className="text-[#AC7434]">TypeScript</span> and <span className="text-[#AC7434]">Node.js</span>
                </p></div>
                <div>
                <p className="tracking-tight xl:text-2xl 2xl:text-2xl text-left font-istok font-medium text-sm text-[#F0D8BD] box-border">
                    I create modern application with clean code, great perfomance, and influence experience.
                </p>
                </div>
            </div>

            <div className="2xl:p-5 p-4 flex flex-row gap-6 xl:gap-10 justify-center flex-wrap items-center">
                <a href="./CV_EN_Correct_Victoria.pdf" download><ButtonPrimary children = "Download my CV ENG" /></a>
                <a href="./CV_ES_Correct_Victoria.pdf" download><ButtonPrimary children = "Download my CV ESP" /></a>
            </div>
                <a href="https://github.com/ViktoriiaPet"><ButtonPrimary children = "My GitHub"/></a>
            
            </div>
            <div className="flex justify-center items-center">
                <div className="w-xs xl:w-md 2xl:w-lg border-10 border-b-50 border-[#a65745] box-border ">
                    <img src={myPhoto} alt="my photo" />
                </div>
            </div>
            </div>
            <StackBanner />
            </header>
        )
    }