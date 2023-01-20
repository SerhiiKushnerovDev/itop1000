import { useState, useEffect } from "react";
import { MainContainer } from "../components/MainContainer";

const performSearch = (query: string) =>
  fetch(
    `https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`
  ).then((response) => response.json());

interface IResponse {
  brand: string;
  category: string[];
  delivery_text: string;
  description: string;
  dupe: boolean;
  ean: string;
  id: string;
  offered: {
    domain: string;
    logo: string;
    name: string;
  };
  pid: string;
  product: {
    image: string;
    price: {
      currency: string;
      low: number;
    };
    title: string;
  };
  url: string;
}

export default function Search() {
  const [searchResults, setSearchResults] = useState<IResponse[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (!searchValue) return;
    performSearch("text").then(({ data }) => setSearchResults(data));
  }, [searchValue]);

  return (
    <MainContainer>
      <div className="p-4">
        <label htmlFor="searchQuery" className="mr-4 text-[#4d7c0f] text-xl">
          Search for:
        </label>
        <input
          id="searchQuery"
          defaultValue={searchValue}
          //   onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchValue(e.currentTarget.value);
            }
          }}
          type="text"
          className="border"
        />
        <ul>
          {searchResults.map(({ id, product: { title } }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}
