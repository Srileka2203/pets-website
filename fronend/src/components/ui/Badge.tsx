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
    default: "bg-gray-100 text-gray-700",
    dark: "bg-gray-800 text-white",
    outline: "border border-gray-300 bg-white text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}