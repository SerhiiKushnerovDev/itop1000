import Navbar from "./Navbar";
import Head from "next/head";
import { useCallback } from "react";

export interface Main {
  children?: React.ReactNode;
  keyword?: string;
}

export const MainContainer = ({ children, keyword }: Main) => {
  // const st = useCallback(() => {
  //   if (!children) {
  //     return;
  //   }
  // }, [children]);
  // st();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="navbar_items">
        <Navbar href={"/"} text="Main Page">
          MAIN
        </Navbar>
        <Navbar href={"/profile"} text="Profile">
          PROFILE
        </Navbar>
        <Navbar href={"/users"} text="Users">
          USERS
        </Navbar>
        <Navbar href={"/search"} text="Search">
          Search
        </Navbar>
      </div>
      <div>{children}</div>
    </>
  );
};
