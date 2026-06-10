    import { ButtonPrimary } from "./Button-primary"
    import { StackBanner } from "./StackBanner"
    export function MainHeader() {


        return(
            <>
            <div className="grid grid-cols-2 gap-1">
            <div className="bg-transparent p-8 pb-6 col-span-1">
            <div>
                <p className="font-istok font-medium text-5xl text-neutral-600 pb-2">
                    I build. I ship. 
                </p>
                <p  className="font-istok font-medium text-5xl text-neutral-600 pb-2">
                    I make it <span className="text-blue-300">scale</span>
                </p>
                <p className="font-istok font-medium text-sm text-neutral-400 box-border p-4">
                    I create modern application with clean code, great perfomance, and influence experience.
                </p>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4 justify-items-start">
                <ButtonPrimary to="/work" children = "View my work"/>
                <a href="/CV_Viktoriia_Petukhova.pdf" download><ButtonPrimary to="/new" children = "Let's connect" /></a>
            </div>
            </div>
            </div>
            <StackBanner />
            </>
        )
    }