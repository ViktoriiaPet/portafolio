    import { ButtonPrimary } from "./Button-primary"
    export function MainHeader() {


        return(
            <div className="grid grid-cols-2 gap-1">
            <div className="bg-transparent p-4 pb-6 col-span-1">
            <div>
                <p className="font-istok font-medium text-5xl text-neutral-600">
                    I build. I ship. I make it <span className="text-blue-300">scale</span>.
                </p>
                <p className="font-istok font-medium text-sm text-neutral-400">
                    I create modern application with clean code, great perfomance, and influence experience.
                </p>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4 justify-items-start">
                <ButtonPrimary to="/work" children = "View my work"/>
                <ButtonPrimary to="/new" children = "Let's connect" />
            </div>
            </div>


            </div>
        )
    }