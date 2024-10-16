"use client";

import { useState, useEffect } from "react";
import { NAVBAR_ITEMS } from "@/app/static/nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../../core/Button";

const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < lastScrollPos || currentScrollPos === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollPos(currentScrollPos);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
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
        className="text-3xl px-5 cursor-pointer"
        onClick={() => router.push("/")}
      >
        {" "}
        Novanex IT{" "}
      </div>

      <div className="flex gap-6">
        {NAVBAR_ITEMS.map((nav) => (
          <Link
            href={nav.href}
            key={nav.id}
            className="uppercase p-3 hover:scale-125 transition-transform duration-300"
          >
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="mr-2">
        <Button variant="primary" href="/contact-us">
          {" "}
          Connect With Us{" "}
        </Button>
      </div>
    </div>
  );
};

export default Header;
