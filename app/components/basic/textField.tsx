type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function TextField({
  label,
  error,
  className = "",
  ...props
}: TextFieldProps) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">{label}</span>
      <input
        aria-invalid={!!error}
        className={`w-full rounded-lg border bg-white/40 px-4 py-2 text-sm
          placeholder:text-ink/40
          focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink
          disabled:cursor-not-allowed disabled:opacity-50
          ${error ? "border-2 border-ink" : "border-ink/30"} ${className}`}
        {...props}
      />
      {error && <span className="block text-xs">Error: {error}</span>}
    </label>
  );
}