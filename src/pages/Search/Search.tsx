/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import { News as INews } from "@/types/news";
// import fetcher from "@/api/fetcher";
// import HeaderPage from "@/components/HeaderPage";
// import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

import { createSlug } from "@/utils/createSlug";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const suggestedSearch = [
  "Premier League Fixtures",
  "Fantasy League Fixtures",
  "Premier League Fixtures",
  "Goal of the Month",
  "Ones to watch",
  "No Room For Racism",
  "Tickets",
  "FPL Player Price changes",
];

const demoSuggestions = [
  "Demo search suggestions",
  "Ronaldo",
  "Xuan Son",
  "Quang hai",
];
function Search() {
  const [searchText, setSearchText] = useState<string>("");
  const handleOnChange = (e: any) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="container lg:w-[65vw] pb-16 md:w-[90vw] mx-auto">
      <div className="relative  mt-14 mx-auto w-full flex items-center border border-gray-300 rounded-lg transition-all duration-300 focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary   h-20">
        <div className="relative w-full h-full">
          <Input
            value={searchText}
            onChange={handleOnChange}
            placeholder="Tìm kiếm Tin tức, Cầu thủ & Câu lạc bộ"
            className=" absolute inset-0 border-none ring-0  text-xl text-primary focus:border-none focus:ring-0 focus:shadow-none h-full "
            size="large"
          />
          {searchText !== "" && (
            <button
              className="py-2 px-3 right-0 text-black border-none absolute top-[50%] -translate-y-[50%]  z-20"
              onClick={() => setSearchText("")}
            >
              <CloseOutlined className="text-xl text-primary" />
            </button>
          )}
        </div>

        <div className="border-l border-gray-300 py-2 px-5 ">
          <SearchOutlined className="text-primary text-2xl cursor-pointer" />
        </div>

        {searchText !== "" && (
          <div className="top-[calc(104%)] absolute right-0 left-0 min-h-20    flex flex-col overflow-auto h-[calc(200px)] shadow-md">
            {demoSuggestions.map((item, id) => {
              return (
                <Link
                  className=" text-lg py-3.5 px-3  text-primary bg-[#f5f2f5] hover:bg-purple-600  hover:text-white transition-all duration-150 ease-in-out rounded-none flex leading-10 items-center "
                  key={id}
                  to={`?term=${createSlug(item)}`}
                >
                  <span className="h-full">{item}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <Divider className="my-14 border-gray-300" />

      <div className="">
        <p className="text-xl font-bold text-primary mb-4">Gợi ý tìm kiếm</p>
        <div className="flex flex-wrap gap-2 ">
          {suggestedSearch.map((item, index) => (
            <Link
              className="py-1.5 px-3 rounded-md text-primary bg-[#f5f2f5] hover:bg-purple-600 hover:text-white transition-all duration-150 ease-in-out"
              key={index}
              to={`?term=${createSlug(item)}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <Divider className="my-11 border-gray-300" />
      <div className="">
        <p className="text-xl font-bold text-primary mb-4">Cầu thủ</p>
        <div className="flex flex-wrap gap-2 ">
          {suggestedSearch.map((item, index) => (
            <Link
              className="py-1.5 px-3 rounded-md text-primary bg-[#f5f2f5] hover:bg-purple-600 hover:text-white transition-all duration-150 ease-in-out"
              key={index}
              to={`?term=${createSlug(item)}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
