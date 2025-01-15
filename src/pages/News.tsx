import React, { useEffect, useState } from "react";
import { News as INews } from "../types/news";
import fetcher from "../api/fetcher";
import HeaderPage from "../components/HeaderPage";
import { Link } from "react-router-dom";

function News() {
  const [newsData, setNewsData] = useState<INews[]>([]);
  useEffect(() => {
    fetcher.get("news").then((res) => {
      console.log(res);
      setNewsData(res.data);
    });
  }, []);
  return (
    <div>
      <HeaderPage title={<span>Tin tức</span>} />
      <div className="container m-auto mt-10">
        {newsData.map((news, index) => (
          <Link
            to={`/news/${news.id}`}
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
                <p className="py-1 line-clamp-1">{news.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;
