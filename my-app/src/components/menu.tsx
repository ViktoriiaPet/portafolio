import { useNavigate } from "react-router-dom"
import { ButtonPrimary } from "./Button-primary";
export function MenuPrimary () {
    const navigate = useNavigate();
    return (
        <>
        <div className="flex flex-row items-center mt-3 text-neutral-700">
            <button className="p-5 ml-5 w-12 h-12 bg-[url('assets/wallBlock.png')] bg-contain bg-no-repeat bg-center shrink-0" onClick={() => navigate("/")} />

            <div className="flex gap-16  mx-auto">
            <button onClick={() => navigate("/work")}> Work </button>
            <button onClick={() => navigate("/about")}> About </button>
            <button onClick={() => navigate("/stack")}> Stack </button>
            <button onClick={() => navigate("/blog")}> Blog </button>
            <button> ... </button>
            <ButtonPrimary children = "Contact me" />
            </div>
        </div>
        </>
    )
}