import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-[24px] border border-[#F4D8CE] bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}