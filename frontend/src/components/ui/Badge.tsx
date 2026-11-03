import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "dark" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[#E8FAF7] text-[#168F82]",
    dark: "bg-[#FF7043] text-white",
    outline:
      "border border-[#BFEDE7] bg-white text-[#26C6B5]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}