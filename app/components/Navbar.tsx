
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/blog" },
  { label: "Gallery", href: "/photo-gallery" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          Tech<span className="text-blue-600">Blog.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-200 px-3 py-2 text-xl">
            ☰
          </summary>

          <div className="absolute right-0 top-12 z-50 flex w-48 flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
