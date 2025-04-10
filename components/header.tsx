"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mainNavItems = [
  {
    title: "Strona główna",
    href: "/",
  },
  {
    title: "O szkole",
    href: "#",
    children: [
      { title: "Historia", href: "#" },
      { title: "Patron", href: "#" },
      { title: "Kadra", href: "#" },
      { title: "Dokumenty", href: "#" },
    ],
  },
  {
    title: "Dla ucznia",
    href: "#",
    children: [
      { title: "Plan lekcji", href: "#" },
      { title: "Dzwonki", href: "#" },
      { title: "Samorząd uczniowski", href: "#" },
      { title: "Biblioteka", href: "#" },
    ],
  },
  {
    title: "Dla kandydata",
    href: "#",
    children: [
      { title: "Rekrutacja", href: "#" },
      { title: "Oferta edukacyjna", href: "#" },
      { title: "Dni otwarte", href: "#" },
    ],
  },
  {
    title: "Aktualności",
    href: "#",
  },
  {
    title: "Kontakt",
    href: "#",
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/school-logo.png"
              alt="Logo szkoły - zarys budynku"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="hidden text-sm font-medium sm:block">
              <span className="block text-xs text-gray-500">Liceum Ogólnokształcące</span>
              <span>im. Marii Skłodowskiej-Curie</span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {mainNavItems.map((item) => {
            if (item.children) {
              return (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium">
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.title} asChild>
                        <Link href={child.href}>{child.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            return (
              <Button key={item.title} variant="ghost" asChild className="text-sm font-medium">
                <Link href={item.href}>{item.title}</Link>
              </Button>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Dziennik elektroniczny
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            Rekrutacja 2025/2026
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Otwórz menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/school-logo.png"
                  alt="Logo szkoły - zarys budynku"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-sm font-medium">ZSO w Strzelinie</span>
              </Link>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Zamknij menu</span>
            </Button>
          </div>
          <nav className="container mx-auto px-4 py-8">
            <ul className="space-y-6">
              {mainNavItems.map((item) => (
                <li key={item.title} className="border-b border-gray-100 pb-4">
                  <Link href={item.href} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 space-y-1 pl-4">
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.href}
                            className="text-gray-600 hover:text-gray-900"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4">
              <Button variant="outline" className="w-full justify-start">
                Dziennik elektroniczny
              </Button>
              <Button className="w-full justify-start">Rekrutacja 2025/2026</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

