import { Context } from "../context/Context";
import { useContext } from "react";
import { MainContainer } from "../components/MainContainer";
import Footer from "../components/Footer";

export default function Home() {
  const newContext = useContext(Context);

  const changeCollor = (e: Event) => {
    let domX = document.querySelector("body");
    domX.style.backgroundColor = "red";
  };

  return (
    <MainContainer>
      <div>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{" "}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </MainContainer>
  );
}
