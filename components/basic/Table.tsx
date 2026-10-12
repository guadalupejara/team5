
export type Column<T> = {
  header: string;
  render: (row: T) => React.ReactNode;
  align?: "left" | "right";
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  empty?: React.ReactNode;
};

export default function Table<T>({ columns, data, empty }: TableProps<T>) {
   if (data.length === 0 && empty) return <>{empty}</>;
  return (
    <div className="overflow-x-auto rounded-lg border border-ink/20">
      <table className="w-full text-left text-sm">
        <thead className="bg-ink/5 text-xs uppercase tracking-wide text-ink/60">
          <tr>
            {columns.map((c) => (
              <th
                key={c.header}
                className={`px-4 py-2 font-medium ${c.align === "right" ? "text-right" : ""}`}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t border-ink/10 hover:bg-sage/20">
              {columns.map((c) => (
                <td
                  key={c.header}
                  className={`px-4 py-2 ${c.align === "right" ? "text-right" : ""}`}
                >
                  {c.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}