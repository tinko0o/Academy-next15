type SubItem = {
  title: string;
  url: string;
  shortcut?: string;
  label?: string;
  subItems?: SubItem[];
};
type ItemDropdownData = {
  title: string;
  url: string;
  shortcut?: string;
  label?: string;
  subItems: SubItem[];
};

export const itemDropdownData: ItemDropdownData[] = [
  {
    title: "Development",
    url: "#",
    subItems: [
      {
        title: "Web Development",
        url: "/courses/development/web",
        label: "Popular Topics",
        subItems: [
          {
            title: "JavaScript",
            url: "/topic/javascript",
          },
          {
            title: "React JS",
            url: "/topic/react",
          },
          {
            title: "Angular",
            url: "/topic/angular",
          },
          {
            title: "Next.js",
            url: "/topic/nextjs",
          },
          {
            title: "CSS",
            url: "/topic/css",
          },
          {
            title: "Typescript",
            url: "/topic/typescript",
          },
          {
            title: "HTML",
            url: "/topic/html",
          },
          {
            title: "ASP.NET Core",
            url: "/topic/aspnet",
          },
        ],
      },
      {
        title: "Mobile Development",
        url: "/courses/development/mobile",
        label: "Popular Topics",
        subItems: [
          {
            title: "iOS Development",
            url: "/topic/ios",
          },
          {
            title: "Android Development",
            url: "/topic/android",
          },
        ],
      },
    ],
  },
  {
    title: "Business",
    url: "/courses/business",
    subItems: [
      {
        title: "Entrepreneurship",
        url: "/courses/business/entrepreneurship",
        label: "Popular Topics",
        subItems: [
          {
            title: "Startup Fundamentals",
            url: "/topic/startup",
          },
          {
            title: "Business Planning",
            url: "/topic/planning",
          },
        ],
      },
      {
        title: "Marketing",
        url: "/courses/business/marketing",
        subItems: [
          {
            title: "Digital Marketing",
            url: "/topic/digital",
          },
          {
            title: "Social Media Marketing",
            url: "/topic/social",
          },
        ],
      },
    ],
  },
  {
    title: "Design",
    url: "/courses/design",
    subItems: [
      {
        title: "UI/UX Design",
        url: "/courses/design/ui-ux",
        label: "Popular Topics",
        subItems: [
          {
            title: "User Interface Design",
            url: "/topic/interface",
          },
          {
            title: "User Experience Design",
            url: "/topic/experience",
          },
        ],
      },
      {
        title: "Graphic Design",
        url: "/courses/design/graphic",
        label: "Popular Topics",
        subItems: [
          {
            title: "Brand Design",
            url: "/topic/brand",
          },
          {
            title: "Print Design",
            url: "/topic/print",
          },
        ],
      },
    ],
  },
];
