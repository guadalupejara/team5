import { ChevronDown } from "lucide-react";

type DropdownProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

export default function Dropdown({ label, className = "", children, ...props }: DropdownProps) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">{label}</span>
      <div className="relative">
        <select
          className={`w-full appearance-none rounded-lg border border-ink/30 bg-white/40 px-4 py-2 pr-10 text-sm
            focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink
            disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
        />
      </div>
    </label>
  );
}