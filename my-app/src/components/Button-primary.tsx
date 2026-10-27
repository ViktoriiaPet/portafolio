
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
};


export function ButtonPrimary({ children, to, onClick }: ButtonProps) {

    const navigate = useNavigate();

     const handleClick = () => {
    if (to) navigate(to);
    else if (onClick) onClick();
  };
  return (
    <button
      onClick={handleClick}
      className="text-[#044953] self-center shadow-[3px_3px_20px_0px_rgba(0,0,0,0.05)] bg-[#F0D8BD] backdrop-opacity-10 py-2 px-4 hover:bg-sky-200/20 inline-block"
    >
      {children}
    </button>
  )
}