import React from "react";
import { News } from "../types/news";

interface IProps {
  news: News;
}

function NewsCard(props: IProps) {
  const { news } = props;
  return (
    <div>
      <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden">
        <img src={news.imgUrl} alt="" />
      </div>
      <span className="font-bold text-sm text-gray-500 block pt-1">
        {news.tag}
      </span>
      <p className="py-1">{news.title}</p>
    </div>
  );
}

export default NewsCard;
