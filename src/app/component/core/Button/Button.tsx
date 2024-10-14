"use client"

import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import Icon from "../Icon/Icon";

interface IButtonProps {
  className?: string;
  href: string;
  variant: "primary" | "secondary" | "danger";
  children?: ReactNode;
}

const variantStyles = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  danger: "bg-danger",
};

const Button: FC<IButtonProps> = ({ className, href, variant, children }) => {
  const router = useRouter();
  return (
    <button
      className={`${className} ${variantStyles[variant]} px-2 py-4 rounded-xl ring-0 outline-0 hover:px-7 transition-all duration-300 flex gap-3 font-semibold hover:justify-center items-center`}
      onClick={() => router.push(href)}
    >
      {children}
      <Icon.MoveRight  />
    </button>
  );
};

export default Button;
