export interface TypeMock {
  bgColor: string[];
  value?: any;
  children?: React.ReactNode;
  errorData?: {
    errorNumber: string;
    errorMessage: string;
    errorBack: string;
  };
  pathData: Array<Object>;
}

export const MockData: TypeMock = {
  bgColor: ["green", "blue"],
  errorData: {
    errorNumber: "404",
    errorMessage: "Page Not Found",
    errorBack: "Go Home",
  },
  pathData: [
    {
      href: "/",
      text: "Main Page",
    },
    {
      href: "/profile",
      text: "Profile",
    },
    {
      href: "/users",
      text: "Users",
    },
    {
      href: "/search",
      text: "Search",
    },
  ],
};
