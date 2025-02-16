import { Link } from "react-router-dom";
import { News } from "../types/news";

interface IProps {
  news: News;
}

function NewsCard(props: IProps) {
  const { news } = props;
  return (
    <Link to={`/news/${news.id}`} className="group hover:cursor-pointer">
      <div className=" aspect-[16/9] rounded overflow-hidden">
        <img
          src={news.thumbnail}
          alt=""
          className="group-hover:scale-110 transition-all duration-300 w-full h-full object-cover"
        />
      </div>
      <span className="font-bold text-sm text-gray-500 block pt-1">
        {news.tag}
      </span>
      <p className="py-1 group-hover:underline line-clamp-2">{news.title}</p>
    </Link>
  );
}

export default NewsCard;
