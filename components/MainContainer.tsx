import Navbar from "./Navbar";
import Head from "next/head";

export interface Main {
  children?: React.ReactNode;
  keyword?: string;
}

export const MainContainer = ({ children, keyword }: Main) => {
  console.log("this is CHildren", children);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Navbar href={"/"} text="Main Page">
        MAIN
      </Navbar>
      <Navbar href={"/profile"} text="Profile">
        PROFILE
      </Navbar>
      <Navbar href={"/users"} text="Users">
        USERS
      </Navbar>

      <div>{children}</div>
    </>
  );
};
