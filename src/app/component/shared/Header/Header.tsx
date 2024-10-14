"use client";

import { NAVBAR_ITEMS } from "@/app/static/nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../../core/Button";

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-20 bg-fixed bg-header-bg flex justify-between items-center text-gray-300 z-[99999999]">
      <div
        className="text-3xl px-5 cursor-pointer"
        onClick={() => router.push("/")}
      >
        {" "}
        Novanex IT{" "}
      </div>

      <div className="flex gap-6">
        {NAVBAR_ITEMS.map((nav) => (
          <Link href={nav.href} key={nav.id} className="uppercase p-3 hover:scale-125 transition-transform duration-300">
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
