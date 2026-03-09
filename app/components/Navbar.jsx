"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {

    const pathname = usePathname()

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full border-b border-gray-800 bg-black/90 backdrop-blur-md z-50">

            <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-semibold tracking-wide text-white">
                    LARA
                </h1>

                {/* Links */}
                <div className="flex gap-8 text-sm">

                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition hover:text-white ${pathname === link.href
                                    ? "text-white"
                                    : "text-gray-400"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>

            </div>

        </nav>
    )
}