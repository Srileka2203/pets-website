interface LoadingProps {
  text?: string;
  className?: string;
}

export default function Loading({
  text = "Loading...",
  className = "",
}: LoadingProps) {
  return (
    <div
      className={`flex min-h-[200px] w-full items-center justify-center ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#BFEDE7] border-t-[#26C6B5]" />

        <p className="text-sm text-[#68778D]">
          {text}
        </p>
      </div>
    </div>
  );
}