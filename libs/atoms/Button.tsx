import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isPrimary: boolean;
};

function Button({ children, isPrimary }: Props) {
  return (
    <button
      className={
        isPrimary ? `button primary text-lg` : `button secondary text-lg`
      }
    >
      {children}
    </button>
  );
}

export default Button;
