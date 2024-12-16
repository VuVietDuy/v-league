import React from "react";
import NewsCard from "./NewsCard";
import { News } from "../types/news";
import { ArrowRightOutlined } from "@ant-design/icons";

const latestNews: Array<News> = [
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
  },
];

function LatestNews() {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-bold">Tin tức mới nhất</h2>
        <a href="" className="text-sm hover:underline">
          Xem thêm <ArrowRightOutlined />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        {latestNews.map((item, index) => (
          <NewsCard news={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
