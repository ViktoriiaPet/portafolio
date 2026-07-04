    import { ButtonPrimary } from "./Button-primary"
    import { StackBanner } from "./StackBanner"
    export function MainHeader() {


        return(
            <header>
            <div className="grid sm:grid-cols-2 gap-1">
            <div className="bg-transparent p-8 pb-6 sm:col-span-1">
            <div className="flex flex-col sm:justify-center">
                <div>
                <p className="font-istok font-medium sm:text-5xl text-neutral-600 pb-2 text-3xl">
                   Full Stack Developer focused on <span className="text-blue-300">TypeScript</span> and <span className="text-blue-300">Node.js</span>
                </p></div>
                <div>
                <p className="font-istok font-medium text-sm text-neutral-600 box-border p-4">
                    I create modern application with clean code, great perfomance, and influence experience.
                </p>
                </div>
            </div>
            <div className="p-4 flex flex-row gap-4 justify-center flex-wrap items-center">
                <a href="./CV_EN_Correct_Victoria.pdf" download><ButtonPrimary children = "Download my CV ENG" /></a>
                <a href="./CV_ES_Correct_Victoria.pdf" download><ButtonPrimary children = "Download my CV ESP" /></a></div>
                <a href="https://github.com/ViktoriiaPet"><ButtonPrimary children = "My GitHub"/></a>
            
            </div>
            </div>
            <StackBanner />
            </header>
        )
    }