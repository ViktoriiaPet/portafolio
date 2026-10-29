import { useNavigate } from "react-router-dom"
import { ButtonPrimary } from "./Button-primary";
export function MenuPrimary () {
    const navigate = useNavigate();
    return (
        <nav className="bg-[#044953] flex flex-col items-center justify-between w-full">
        <div className="flex flex-row justify-between items-cente text-neutral-700 py-3 px-5 xl:px-15 w-full max-w-[1514px]">
            <button className="p-5 pt-10 w-12 h-12 bg-[url('assets/favicon.png')] bg-contain bg-no-repeat bg-center shrink-0" onClick={() => navigate("/")} />

            <div className="flex gap-16 flex-end">
            {/*<button onClick={() => navigate("/work")}> Work </button>
            <button onClick={() => navigate("/about")}> About </button>
            <button onClick={() => navigate("/stack")}> Stack </button>
            <button onClick={() => navigate("/blog")}> Blog </button>
            <button> ... </button>*/}
            
            </div>
            <a href="https://www.linkedin.com/in/victoria-petukhova-767642348"><ButtonPrimary children = "Contact me in LinkedIn" /></a> 
        </div>
        </nav>
    )
}