import fetcher from "@/api/fetcher";
import HeaderPage from "@/components/HeaderPage";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Loading from "@/components/Loading";

function NewsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [key, setKey] = useState(searchParams.get("key"));
  const {
    data: newsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["GET_LIST_NEWS"],
    queryFn: () =>
      fetcher.get("news", { params: { key: key } }).then((res) => res.data),
  });

  const handleSearch = (e: any) => {
    e.preventDefault();
    refetch();
  };

  const handleChange = (e: any) => {
    setKey(e.target.value);
    setSearchParams("key", e.target.value);
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <HeaderPage
        title={
          <div className="flex">
            <h1 className="mr-6">Tin tức</h1>
            <form onSubmit={handleSearch} className="max-w-md h-full">
              <div className="relative">
                <input
                  onChange={handleChange}
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

export default NewsList;
