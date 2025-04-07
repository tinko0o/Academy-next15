export type MenuProps = {
  id: number;
  title: string;
  path?: string;
  submenu?: MenuProps[];
};

export const HOME_PAGE_MENU: MenuProps[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
  },
  {
    id: 4,
    title: "Pages",

    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
      },
    ],
  },
];
