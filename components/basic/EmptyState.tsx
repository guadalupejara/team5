type EmptyStateProps = {
  icon?: React.ReactNode;
  title: string;
  hint?: string;
  action?: React.ReactNode;
};

export default function EmptyState({ icon, title, hint, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-ink/30 px-4 py-8 text-center">
      {icon && <div className="text-ink/60">{icon}</div>}
      <div className="text-sm font-medium">{title}</div>
      {hint && <div className="text-xs text-ink/60">{hint}</div>}
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}