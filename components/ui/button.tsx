import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-full font-medium transition",
        variant === "default" && "bg-red-500 text-white hover:bg-red-600",
        variant === "outline" && "border border-white text-white hover:bg-white hover:text-black",
        variant === "ghost" && "text-gray-300 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
