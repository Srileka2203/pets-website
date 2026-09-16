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
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-700" />

        <p className="text-sm text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}