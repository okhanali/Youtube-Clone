import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../loader/spinner";

const Comments = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("/comments", { params: { id } })
      .then((res) => {
        console.log(res.data);
        setComments(res.data.data || []);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // todo yorum verilerini listele

  if (loading) return <Spinner designs="my-20" />;

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.commentId} className="flex gap-3">
          <img
            src={comment.authorThumbnail[0]?.url}
            alt={comment.authorText}
            width={50}
            height={50}
            className="rounded-full object-cover w-10 h-10"
          />
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <p>{comment.authorText}</p>
              <span className="text-gray-500 text-xs">
                {comment.publishedTimeText}
              </span>
            </div>
            <p className="text-sm mt-1 whitespace-pre-line">
              {comment.textDisplay}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
