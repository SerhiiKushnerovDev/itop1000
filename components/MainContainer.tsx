import Navbar from "./Navbar";
import Head from "next/head";
import { MockData } from "../mock/MockData";

export interface Main {
  children?: React.ReactNode;
  keyword?: string;
}

export const MainContainer = ({ children, keyword }: Main) => {
  let dataRouters = [...MockData.pathData];

  console.log("this is PathData", dataRouters);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="navbar_items">
        {dataRouters.map((el, idx) => {
          return <Navbar href={el.href} text={el.text} />;
        })}
      </div>
      <div>{children}</div>
    </>
  );
};
