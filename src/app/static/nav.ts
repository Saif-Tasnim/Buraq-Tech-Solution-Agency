export interface INAV {
  id: number;
  href: string;
  name: string;
  children?: {
    id: number;
    name: string;
    href: string;
    type: string;
  }[];
}

export const NAVBAR_ITEMS: INAV[] = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 3,
    href: "/portfolio",
    name: "Portfolio",
  },
  {
    id: 5,
    href: "/blogs",
    name: "Blog",
  },
  {
    id: 7,
    href: "/hire-us",
    name: "Hire Us",
  },
  {
    id: 6,
    href: "/contact-us",
    name: "Contact us",
  },
];
