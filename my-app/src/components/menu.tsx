import { useNavigate } from "react-router-dom"

export function MenuPrimary () {
    const navigate = useNavigate();
    return (
        <>
        <div>
            <button onClick={() => navigate("/")}> Main </button>
        </div>
        <div>
            <button onClick={() => navigate("/work")}> Work </button>
            <button onClick={() => navigate("/about")}> About </button>
            <button onClick={() => navigate("/stack")}> Stack </button>
            <button onClick={() => navigate("/blog")}> Blog </button>
            <button> ... </button>
        </div>
        </>
    )
}