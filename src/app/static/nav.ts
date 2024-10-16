interface INAV {
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
  // {
  //   id: 4,
  //   href: "/services",
  //   name: "Our Services",
  //   children: [
  //     {
  //       id: 1,
  //       name: "Custom Software Development",
  //       href: "/services/custom-software-development",
  //       type: "Software",
  //     },
  //     {
  //       id: 2,
  //       name: "Web Development",
  //       href: "/services/web-development",
  //       type: "Web",
  //     },
  //     {
  //       id: 3,
  //       name: "Mobile Development",
  //       href: "/services/mobile-development",
  //       type: "Mobile",
  //     },
  //     {
  //       id: 4,
  //       name: "Networking Services",
  //       href: "/services/networking-services",
  //       type: "Networking",
  //     },
  //     {
  //       id: 5,
  //       name: "UI/UX Design",
  //       href: "/services/ui-ux-design",
  //       type: "Design",
  //     },
  //     {
  //       id: 6,
  //       name: "AI Software",
  //       href: "/services/ai-software",
  //       type: "AI",
  //     },
  //   ],
  // },
  {
    id: 5,
    href: "/blogs",
    name: "Blog",
  },
  {
    id: 6,
    href: "/contact-us",
    name: "Contact us",
  },
];
