import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-[#172B4D]"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`w-full rounded-md border border-[#F4D8CE] bg-white px-4 py-2.5 text-sm text-[#172B4D] placeholder:text-[#9AA5B4] outline-none transition-colors duration-200 focus:border-[#26C6B5] focus:ring-2 focus:ring-[#E8FAF7] disabled:cursor-not-allowed disabled:bg-[#FFF8F5] ${className}`}
        {...props}
      />

      {error && (
        <p className="mt-1.5 text-sm text-[#E85D32]">
          {error}
        </p>
      )}
    </div>
  );
}