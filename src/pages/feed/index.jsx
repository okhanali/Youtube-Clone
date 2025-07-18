import { useState, useEffect } from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../components/loader/skeleton-loader";
import Error from "../../components/error";
import Shorts from "../../components/shorts";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";

const Feed = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  // sayfa yüklenince & kategori her değiştiğinde:
  useEffect(() => {
    setLoading(true);

    // istek atılacak url'i belirle
    const url = !selectedCategory
      ? "/home"
      : selectedCategory === "trendler"
      ? "/trending"
      : `/search?query=${selectedCategory}`;

    api
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  // Veriyi kategorize et
  const shorts = data.filter((item) => item.type === "shorts_listing");
  const videos = data.filter((item) => item.type === "video");

  return (
    <div className="page">
      {loading ? (
        <SkeletonLoader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="space-y-8">
          {shorts[0] && <Shorts shortList={shorts[0]} />}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
            {videos.map((item, key) => (
              <Card video={item} key={key} />
            ))}
          </div>

          {shorts[1] && <Shorts shortList={shorts[1]} />}
        </div>
      )}
    </div>
  );
};

export default Feed;
