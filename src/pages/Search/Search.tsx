import { createSlug } from "@/utils/createSlug";
import { SearchOutlined } from "@ant-design/icons";
import { Divider, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const suggestedSearch = [
  "Lịch thi đấu",
  "Bảng xếp hạng",
  "Kết quả",
  "Bàn thắng của tháng",
  "Trực tiếp",
  "Vé",
  "Cầu thủ xuất sắc",
];

const playerSuggestions = [
  "Doãn Ngọc Tân",
  "Đoàn Văn Hậu",
  "Xuân Son",
  "Quang Hải",
  "Nguyễn Hùng Thiện Đức",
  "Ngô Tùng Quốc",
  "Hà Đức Chinh",
];

function Search() {
  const [searchText, setSearchText] = useState<string>("");
  const handleOnChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {};
  return (
    <div className="container lg:w-[65vw] pb-16 md:w-[90vw] mx-auto">
      <div className=" mt-14 mx-auto w-full  items-center transition-all duration-300">
        <form onSubmit={handleSearch} className=" h-full">
          <div className="relative">
            <input
              onChange={handleChange}
              className="hover:border hover:border-purple-950 block w-full p-4 pe-10 text-base text-gray-900 border rounded-lg font-normal bg-gray-50 "
              placeholder="Tìm kiếm"
            />
            <button
              type="submit"
              className="absolute inset-y-0 end-0 flex items-center pl-4 m-2  border-l"
            >
              <SearchOutlined className="w-8 h-8 text-xl text-gray-500" />
            </button>
          </div>
        </form>

        {searchText !== "" && (
          <div className="top-[calc(104%)] absolute right-0 left-0 min-h-20    flex flex-col overflow-auto h-[calc(200px)] shadow-md">
            {playerSuggestions.map((item, id) => {
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
              className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white py-1.5 px-3 rounded-md text-primary bg-[#f5f2f5] hover:bg-purple-600 transition-all duration-150 ease-in-out"
              key={index}
              to={`/search-result?key=${item}`}
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
          {playerSuggestions.map((item, index) => (
            <Link
              className="py-1.5 px-3 rounded-md text-primary bg-[#f5f2f5] hover:bg-purple-600 hover:text-white transition-all duration-150 ease-in-out"
              key={index}
              to={`/search-result?key=${item}`}
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
