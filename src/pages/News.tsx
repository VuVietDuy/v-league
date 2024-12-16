import React from "react";
import { News as INews } from "../types/news";

const latestNews: Array<INews> = [
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
  {
    title: "Thông báo: ban hành Lịch thi đấu Vòng 1/8 – Giải bóng đá...",
    imgUrl: "/images/news.jpg",
    tag: "Thông báo",
    description:
      "Sau 4 ngày học tập, thực hành các bài tập từ khó đến dễ thuộc giai đoạn 3 (bước đào tạo cuối trong khóa đào tạo...",
  },
];

function News() {
  return (
    <div className="container m-auto px-16">
      {latestNews.map((news, index) => (
        <div className="flex gap-6 mb-6">
          <div className="aspect-w-16 aspect-h-9 w-80 rounded overflow-hidden">
            <img src={news.imgUrl} alt="" />
          </div>
          <div>
            <span className="font-bold text-sm text-gray-500 block pt-1">
              {news.tag}
            </span>
            <p className="py-1 text-xl font-medium">{news.title}</p>
            <p className="py-1">{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
