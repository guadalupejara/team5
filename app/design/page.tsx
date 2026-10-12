import { Pencil, User, Clock, AlignLeft } from "lucide-react";
import Button from "../components/basic/button";
import Table, { Column } from "../components/basic/table";
import Card from "../components/basic/card";
import TextField from "../components/basic/textField";
import EmptyState from "../components/basic/emptyState";
import StatusBadge, { Status } from "../components/basic/statusBadge";
import Dropdown from "../components/basic/dropdown";
import { FileText } from "lucide-react";


const colors = [
  { name: "Ink Black", cls: "bg-ink", hex: "#232323" },
  { name: "Warm Gray", cls: "bg-stone", hex: "#dcd9d0" },
  { name: "Muted Sage", cls: "bg-sage", hex: "#9caf9a" },
];

const chargeBacks = [
  { id: "CB-1042", retailer: "Northwind", reason: "Late delivery", amount: 1250.0, status: "Open" },
  { id: "CB-1043", retailer: "Contoso", reason: "Short shipment", amount: 480.5, status: "Disputed" },
  { id: "CB-1044", retailer: "Fabrikam", reason: "Label error", amount: 95.0, status: "Resolved" },
  { id: "CB-1045", retailer: "Contoso", reason: "Missing item", amount: 200.0, status: "Overdue" },
];

type Chargeback = (typeof chargeBacks)[number];

const chargebackColumns: Column<Chargeback>[] = [
  { header: "ID", render: (r) => r.id },
  { header: "Retailer", render: (r) => r.retailer },
  { header: "Reason", render: (r) => r.reason },
  { header: "Status", render: (r) => <StatusBadge status={r.status as Status} /> },
  { header: "Amount", align: "right", render: (r) => `$${r.amount.toFixed(2)}` },
];

export default function DesignPage() {
  return (
    <div className="space-y-8 p-4">
      <h1 className="font-serif text-3xl font-bold">Styleguide</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-wide text-ink/60">Color</h2>
          <div className="flex gap-4">
            {colors.map((c) => (
              <div key={c.name} className="space-y-2">
                <div className={`h-20 w-28 rounded-lg border border-ink/10 ${c.cls}`} />
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-ink/60">{c.hex}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-wide text-ink/60">Type</h2>
          <div className="space-y-6">
            <div>
              <div className="text-xs text-ink/60">UI Labels · DM Sans</div>
              <div className="font-sans text-2xl">UI Labels</div>
            </div>
            <div>
              <div className="text-xs text-ink/60">Headline · Lora</div>
              <div className="font-serif text-4xl">Headline</div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
  <section className="space-y-4">
    <h2 className="text-sm uppercase tracking-wide text-ink/60">Spacing</h2>
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="text-xs text-ink/60">8px spacing step · gap-2</div>
        <div className="flex gap-2">
          <div className="h-4 w-4 bg-ink" />
          <div className="h-4 w-4 bg-ink/20" />
          <div className="h-4 w-4 bg-ink/20" />
          <div className="h-4 w-4 bg-sage" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-xs text-ink/60">16px padding · p-4</div>
        <div className="inline-block border border-ink/10 bg-sage/30 p-4">
          <div className="bg-sage px-4 py-2 text-sm">Content</div>
        </div>
      </div>
    </div>
  </section>

  <section className="space-y-4">
    <h2 className="text-sm uppercase tracking-wide text-ink/60">Iconography</h2>
    <div className="flex gap-4">
      <Pencil size={24} strokeWidth={1.5} />
      <User size={24} strokeWidth={1.5} />
      <Clock size={24} strokeWidth={1.5} />
      <AlignLeft size={24} strokeWidth={1.5} />
    </div>
    <div className="text-xs text-ink/60">lucide-react · 24px · 1.5 stroke</div>
  </section>
</div>
<section className="space-y-4">
  <h2 className="text-sm uppercase tracking-wide text-ink/60">Components</h2>
  <div className="space-y-2">
    <div className="text-xs text-ink/60">Buttons</div>
    <div className="flex gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </div>
  </div>
  <div className="space-y-2">
  <div className="text-xs text-ink/60">Table</div>
  <Table
    data={chargeBacks}
    columns={chargebackColumns}
  />
</div>
  <div className="space-y-2">
  <div className="text-xs text-ink/60">Table</div>
  <Table data={[]} columns={chargebackColumns}
  empty={<EmptyState title="No chargebacks match these filters" hint="Try adjusting your filters." />} />
</div>
<div className="grid gap-8 md:grid-cols-2">
<div className="space-y-2">
    <div className="text-xs text-ink/60">Cards</div>
    <div className="flex gap-2">
 <Card>
  <div className="text-xs uppercase tracking-wide text-ink/60">Total disputed</div>
  <div className="font-serif text-3xl">$12,480</div>
</Card>
    </div>
  </div>
  <div className="space-y-2">
  <div className="text-xs text-ink/60">Text field</div>
  <div className="grid max-w-xl gap-4 sm:grid-cols-3">
    <TextField label="Default" placeholder="PO number" />
    <TextField label="Focus (click me)" placeholder="Amount" />
    <TextField label="Error" defaultValue="12x" error="Enter a valid amount" />
  </div>
</div>
<div className="grid gap-8 md:grid-cols-2">
  <div className="space-y-2">
    <div className="text-xs text-ink/60">Dropdown</div>
    <div className="max-w-xs">
      <Dropdown label="Reason">
        <option>Late delivery</option>
        <option>Short shipment</option>
        <option>Label error</option>
      </Dropdown>
    </div>
  </div>

  <div className="space-y-2">
    <div className="text-xs text-ink/60">Status badges</div>
    <div className="flex flex-wrap gap-2">
      <StatusBadge status="Open" />
      <StatusBadge status="Disputed" />
      <StatusBadge status="Resolved" />
      <StatusBadge status="Overdue" />
    </div>
  </div>
</div>

<div className="space-y-2">
  <div className="text-xs text-ink/60">Empty state</div>
  <div className="max-w-sm">
    <EmptyState
      icon={<FileText size={24} strokeWidth={1.5} />}
      title="No chargebacks match these filters"
      hint="Try adjusting your filters."
    />
  </div>
</div>
</div>
</section>
    </div>
  );
}