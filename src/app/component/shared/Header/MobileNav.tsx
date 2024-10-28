import { NAVBAR_ITEMS } from "@/app/static/nav";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className={`lg:hidden absolute flex flex-col gap-4 w-full text-center top-14 bg-header-bg pb-5 transition-all duration-500`}>
      {NAVBAR_ITEMS.map((nav) => (
        <Link
          href={nav.href}
          key={nav.id}
          className={`uppercase px-3 py-1 hover:scale-125 transition-transform duration-300}`}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
