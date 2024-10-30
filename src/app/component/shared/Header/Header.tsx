"use client";

import { useState, useEffect, useRef } from "react";
import { NAVBAR_ITEMS } from "@/app/static/nav";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../../core/Button";
import MobileNav from "./MobileNav";
import Hamburger from "hamburger-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < lastScrollPos || currentScrollPos === 0);
      setLastScrollPos(currentScrollPos);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [lastScrollPos]);

  return (
    <div
      className={`h-20 sticky top-0 flex justify-between items-center z-[99999999] transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-header-bg text-gray-300`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      <div
        className={`text-xl lg:text-3xl px-2 md:px-5 cursor-pointer ${
          isOpen ? "hidden" : "block"
        }`}
        onClick={() => router.push("/")}
      >
        Buraq Tech Solution
      </div>

      <div className="lg:flex gap-6 hidden">
        {NAVBAR_ITEMS.map((nav) => (
          <Link
            href={nav.href}
            key={nav.id}
            className={`uppercase px-3 py-1 hover:scale-125 transition-transform duration-300 ${
              pathname === nav.href ? "border-b border-gray-200" : ""
            }`}
          >
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="block lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && <MobileNav />}

      <div className="mr-2 hidden lg:block">
        <Button variant="primary" href="/contact-us">
          Connect With Us
        </Button>
      </div>
    </div>
  );
};

export default Header;
