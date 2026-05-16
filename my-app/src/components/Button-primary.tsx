
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
      className="bg-sky-100 backdrop-opacity-10 py-3 px-10 hover:bg-sky-200 inline-block rounded-2xl"
    >
      {children}
    </button>
  )
}