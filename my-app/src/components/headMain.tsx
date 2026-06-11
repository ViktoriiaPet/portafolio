    import { ButtonPrimary } from "./Button-primary"
    import { StackBanner } from "./StackBanner"
    export function MainHeader() {


        return(
            <>
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
            <div className="p-4 grid grid-cols-2 gap-4 justify-items-start">
                <a href="https://github.com/ViktoriiaPet"><ButtonPrimary children = "My GitHub"/></a>
                <a href="./CV_Viktoriia_Petukhova.pdf" download><ButtonPrimary children = "Download my CV" /></a>
            </div>
            </div>
            </div>
            <StackBanner />
            </>
        )
    }