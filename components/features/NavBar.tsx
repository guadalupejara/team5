import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/design", label: "Style sheet" },
  { href: "/todos", label: "Playground" },
];

export default function Navbar() {
  return (
    <div className="border-b border-ink/20">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-serif text-lg font-bold">
          Team 5
        </Link>
        <div className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}