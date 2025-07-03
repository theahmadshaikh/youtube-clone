import type React from "react";

const Button : React.FC<{
  onClick: () => void;
  className?: string;
    children: React.ReactNode;
}> = ({ onClick, className,children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer ${className}`}
    >
        {children}
    </button>
  );
}
export default Button;