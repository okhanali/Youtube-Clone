const array = new Array(20).fill("");
const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 lg:gap-6">
      {array.map((item, key) => (
        <div key={key} className="animate-pulse">
          {/* Thumbnail */}
          <div className="w-full aspect-video bg-grey rounded-xl mb-3 "/>

          {/* Video Info */}
          <div className="flex gap-3">
            {/* Avatar */}
            <div className="w-9 h-9 bg-grey rounded-full mb-2"/>

            {/* Yazı İçeriği */}
            <div className="flex-1 space-y-2">
              {/* Başlık */}
              <div className="h-4 bg-grey rounded w-full"/>
              <div className="h-4 bg-grey rounded w-3/4"/>

              {/* Kanal İsmi */}
              <div className="h-3 bg-grey w-1/3 rounded"/>

              {/* Görüntülenme Tarih */}
              <div className="flex gap-2">
                <div className="h-3 bg-grey w-20 rounded"/>
                <div className="h-3 bg-grey w-16 rounded"/>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
