import React, { FC, ReactNode } from "react";

interface IntButton extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  disabled?:boolean
} 

const Button:FC<IntButton>=({disabled,children,...props})=> {
  
  return (
    <button disabled>
      {children}
    </button>
  );
}

export default Button;
