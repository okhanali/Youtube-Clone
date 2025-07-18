import { useSearchParams } from "react-router-dom";
import Card from "../card";
import { useEffect, useState } from "react";
import api from "../../utils/api";

const Related = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setLoading(true);

    const params = {
      id,
    };

    api
      .get("/related", { params })
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <h2 className="text-lg font-semibold mb-4 hidden lg:block">
        İlgili Videolar
      </h2>

      <div className="@container">
        {videos?.map((video, key) => (
          <Card key={key} video={video} isRow />
        ))}
      </div>
    </>
  );
};

export default Related;
