"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Inicio",
    href: "/",
    isActive: (pathname: string) => pathname === "/",
  },
  {
    label: "Recetas",
    href: "/recipes",
    isActive: (pathname: string) =>
      pathname === "/recipes" || pathname.startsWith("/recipes/"),
  },
  {
    label: "Guardadas",
    href: "/saved",
    isActive: (pathname: string) => pathname === "/saved",
  },
  {
    label: "Perfil",
    href: "/profile",
    isActive: (pathname: string) => pathname === "/profile",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          className="shrink-0 font-bold text-stone-950"
          href="/"
          aria-label="Sazón, inicio"
        >
          <span className="mr-2 inline-flex size-8 items-center justify-center rounded-full bg-orange-600 text-sm text-white">
            S
          </span>
          <span className="hidden sm:inline">Sazón</span>
        </Link>

        <nav aria-label="Navegación principal" className="flex items-center gap-1">
          {navLinks.map((link) => {
            const active = link.isActive(pathname);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-2.5 py-2 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
                  active
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}