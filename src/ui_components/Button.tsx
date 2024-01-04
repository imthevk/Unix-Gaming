import React from "react";

interface IButton {
  className?: string;
  children: React.ReactNode;
}

function Button({ className, children }: IButton) {
  return (
    <button className={`font-inter text-secondary rounded-full ${className}`}>
      {children}
    </button>
  );
}

export default Button;