import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);

  // diznin son elemanını al
  const thumbnail =
    isHover && video.richThumbnail?.length
      ? video.richThumbnail.at(-1)
      : video.thumbnail?.length
      ? video.thumbnail.at(-1)
      : null;

  // Yatay Card
  if (isRow) {
    return (
      <Link
        to={`/watch?v=${video.videoId}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="flex gap-2 md:gap-4 p-2 hover:bg-zinc-900 cursor-pointer transition rounded-lg"
      >
        {/* Thumbnail */}
        <div className="relative flex-1 max-w-[500px] rounded-lg overflow-hidden h-fit min-w-[200px]">
          <img
            src={thumbnail.url}
            alt={video.title}
            className="w-full h-full"
          />

          {video.lengthText && (
            <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-2 py-0.5 rounded">
              {video.lengthText}
            </span>
          )}

          {video.isLive && (
            <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
              CANLI
            </span>
          )}
        </div>

        {/* Video Bilgileri */}
        <div className="flex-1 flex flex-col gap-2 md:gap-4">
          <h3 className="line-clamp-2 leading-tight text-base @lg:text-lg">
            {video.title}
          </h3>

          {video.viewCount && (
            <div className="flex items-center gap-1 text-xs @md:text-sm text-[#aaaaaa]">
              <span className="line-clamp-1">
                {millify(video.viewCount, {
                  units: ["", "B", "Mn", "Mr", "Tr"],
                })}{" "}
                <span className="ps-0.5 @lg:hidden">görüntülenme</span>
              </span>

              {video.publishedTimeText && !video.isLive && (
                <>
                  <span>•</span>
                  <span className="line-clamp-1">
                    {video.publishedTimeText}
                  </span>
                </>
              )}
            </div>
          )}

          <p className="text-sm text-[#aaaaaa] hover:text-white">
            {video.channelTitle}
          </p>

          <p className="text-[#aaaaaa] line-clamp-1 text-xs @md:text-sm">
            {video.description}
          </p>
        </div>
      </Link>
    );
  }

  // Dikey Card
  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer group"
    >
      <div className="block">
        {/* Thumbnail */}
        <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-video">
          <img
            src={thumbnail.url}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />

          {video.lengthText && (
            <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-2 py-0.5 rounded">
              {video.lengthText}
            </span>
          )}

          {video.isLive && (
            <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
              CANLI
            </span>
          )}
        </div>

        {/* Video Bilgileri */}
        <div className="flex gap-3">
          {/* Kanal Foto */}
          {video.channelThumbnail?.[0]?.url && (
            <img
              src={video.channelThumbnail[0].url}
              className="w-9 h-9 rounded-full"
            />
          )}

          {/* Yazı İçeriği */}
          <div className="flex-1">
            <h3 className="line-clamp-2 mb-1 leading-tight">{video.title}</h3>

            <p className="text-sm text-[#aaaaaa] hover:text-white cursor-pointer transition mb-1">
              {video.channelTitle}
            </p>

            <div className="flex items-center gap-1 text-sm text-[#aaaaaa] ">
              <span className="line-clamp-1">
                {millify(video.viewCount, {
                  units: ["", "B", "Mn", "Mr", "Tr"],
                })}{" "}
                görüntülenme
              </span>

              {video.publishedTimeText && !video.isLive && (
                <>
                  <span>•</span>
                  <span className="line-clamp-1">
                    {video.publishedTimeText}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
