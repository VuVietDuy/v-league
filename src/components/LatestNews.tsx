import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import { ArrowRightOutlined } from "@ant-design/icons";

function LatestNews(props: any) {
  const { latestNews } = props;
  return (
    <div>
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-bold">Tin tức mới nhất</h2>
        <Link to="/news" className="text-sm hover:underline">
          Xem thêm <ArrowRightOutlined />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {latestNews.map((item: any, index: any) => (
          <NewsCard news={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
