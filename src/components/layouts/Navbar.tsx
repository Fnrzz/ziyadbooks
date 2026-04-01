"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import LoginModal from "../features/auth/LoginModal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={150}
            height={40}
            className="w-[120px] md:w-[150px] h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <Link href="/" className="text-sm  hover:text-primary">
            Home
          </Link>
          <Link href="/" className="text-sm  hover:text-primary">
            Shop
          </Link>
          <Link href="/" className="text-sm  hover:text-primary">
            Sale
          </Link>
          <Link href="/" className="text-sm  hover:text-primary">
            About
          </Link>
          <Link href="/" className="text-sm  hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:size-icon-lg">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:size-icon-lg">
            <ShoppingCart className="w-5 h-5" />
          </Button>

          <div className="md:block hidden">
            <LoginModal />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden flex"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md  flex flex-col px-6 py-4 gap-4">
          <Link
            href="/"
            className="text-sm  py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-sm  py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            href="/"
            className="text-sm  py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Sale
          </Link>
          <Link
            href="/"
            className="text-sm  py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/"
            className="text-sm  py-2 hover:text-primary"
            onClick={toggleMenu}
          >
            Contact
          </Link>

          <LoginModal />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
