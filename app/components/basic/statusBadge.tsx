export type Status = "Open" | "Disputed" | "Resolved" | "Overdue";

const styles: Record<Status, string> = {
  Open: "border border-ink/60",
  Disputed: "border border-dashed border-ink/60",
  Resolved: "border border-sage bg-sage text-ink",
  Overdue: "border border-ink bg-ink text-stone",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}