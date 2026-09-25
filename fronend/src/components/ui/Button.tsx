import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#FF7043] text-white hover:bg-[#E85D32]",
    secondary:
      "bg-[#26C6B5] text-white hover:bg-[#20AD9E]",
    outline:
      "border border-[#FF7043] bg-white text-[#FF7043] hover:bg-[#FFF1EC]",
    ghost:
      "bg-transparent text-[#536174] hover:bg-[#E8FAF7] hover:text-[#26C6B5]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}