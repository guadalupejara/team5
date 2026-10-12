type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-ink/20 bg-white/40 p-4 ${className}`}
      {...props}
    />
  );
}