"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / App Name */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Match Finder
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavItem href="/matches" pathname={pathname}>
            Matches
          </NavItem>
          <NavItem href="/lists" pathname={pathname}>
            Lists
          </NavItem>
          <NavItem href="/messages" pathname={pathname}>
            Messages
          </NavItem>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-600 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full flex flex-col items-center space-y-4 p-6">
          <NavItem href="/matches" pathname={pathname} onClick={() => setIsOpen(false)}>
            Matches
          </NavItem>
          <NavItem href="/lists" pathname={pathname} onClick={() => setIsOpen(false)}>
            Lists
          </NavItem>
          <NavItem href="/messages" pathname={pathname} onClick={() => setIsOpen(false)}>
            Messages
          </NavItem>
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

// NavItem component for active link styling
const NavItem = ({ href, pathname, children, onClick }: { href: string; pathname: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    className={`text-gray-700 hover:text-pink-600 transition ${
      pathname === href ? "font-semibold text-pink-600" : ""
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
