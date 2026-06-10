
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
      className="self-start shadow-[3px_3px_20px_0px_rgba(0,0,0,0.05)] bg-[#F3F2F5]/20 backdrop-opacity-10 py-3 px-5 hover:bg-sky-200/20 inline-block rounded-2xl"
    >
      {children}
    </button>
  )
}