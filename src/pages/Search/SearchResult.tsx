import fetcher from "@/api/fetcher";
import HeaderPage from "@/components/HeaderPage";
import Loading from "@/components/Loading";
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [key, setKey] = useState(searchParams.get("key"));
  const {
    data: newsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["GET_LIST_NEWS_SEARCH"],
    queryFn: () =>
      fetcher.get("news", { params: { key: key } }).then((res) => res.data),
  });

  const handleSearch = (e: any) => {
    e.preventDefault();
    refetch();
  };

  const handleChange = (e: any) => {
    setKey(e.target.value);
    setSearchParams(e.target.value);
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <HeaderPage
        title={
          <div className="">
            <h1 className="mr-6 mb-2">Kết quả tìm kiếm</h1>
            <form onSubmit={handleSearch} className="w-80 h-full">
              <div className="relative">
                <input
                  onChange={handleChange}
                  value={key || ""}
                  className="hover:border hover:border-purple-950 block h-14 w-80 p-4 pe-10 text-base text-gray-900 border rounded-lg font-normal bg-gray-50 "
                  placeholder="Tìm kiếm"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 end-0 flex items-center px-2 m-2  border-l"
                >
                  <SearchOutlined className="w-8 h-8 text-gray-500" />
                </button>
              </div>
            </form>
          </div>
        }
      />
      <div className="container m-auto mt-10 mb-20">
        <div className="mb-10">
          <span className="mr-2 font-bold">{newsData.length}</span>{" "}
          <span>kết quả</span>
        </div>
        <hr className="mb-8" />
        <p className="text-xl mb-4">
          <span className="font-bold">Tin tức mới nhất: </span>"
          {key?.split("%").join(" ")}"
        </p>
        {newsData.map((news: any, index: any) => (
          <Link
            to={`/news/${news.id}`}
            key={index}
            className="flex gap-6 mb-6 group hover:cursor-pointer"
          >
            <div className="w-[50%] h-24 md:w-80 md:h-44 rounded overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-125 transition-all"
                src={news.thumbnail}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-bold text-[10px] md:text-sm text-gray-500 block pt-1">
                {news.tag}
              </span>
              <p className="py-1 text-sm md:text-xl font-medium group-hover:underline">
                {news.title}
              </p>
              <div className="hidden md:block">
                <p className="py-1 line-clamp-1">
                  <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
