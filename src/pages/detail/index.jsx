import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import ChannelInfo from "../../components/detail/channel-info";
import Description from "../../components/detail/description";
import Related from "../../components/detail/related";
import ReactPlayer from "react-player";
import Comments from "../../components/detail/Comments";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    setLoading(true);

    const params = {
      id,
      extend: "1",
    };

    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner designs="mt-[250px]" />;

  if (error) return <Error message={error} />;

  return (
    <div className="page max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-6">
      {/* Video Alanı */}
      <div className="flex-1 lg:max-w-[854px]">
        {/* Player */}
        <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${id}`}
            playing={false}
            controls
            width="100%"
            height="100%"
          />
        </div>

        {/* Bilgiler */}
        <div className="space-y-4 ">
          <h1 className="text-xl font-bold line-clamp-2 leading-tight">
            {video.title}
          </h1>
          <ChannelInfo video={video} />
          <Description video={video} />
          <Comments id={id} />
        </div>
      </div>

      {/* Önerilen Videolar */}
      <div className="lg:w-[400px]">
        <Related id={id} />
      </div>
    </div>
  );
};

export default Detail;
