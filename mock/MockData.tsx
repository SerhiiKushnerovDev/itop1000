export interface TypeMock {
  bgColor: string[];
  value?: any;
  children?: React.ReactNode;
  errorData?: {
    errorNumber: string;
    errorMessage: string;
    errorBack: string;
  };
}

export const MockData: TypeMock = {
  bgColor: ["green", "blue"],
  errorData: {
    errorNumber: "404",
    errorMessage: "Page Not Found",
    errorBack: "Go Home",
  },
};
