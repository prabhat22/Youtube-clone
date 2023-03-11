import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
const VideoCard = ({ id, snippet, statistics }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/watch?v=${id}`}
      className=" w-40 group sm:w-56 cursor-pointer  hover:shadow-xl hover:rounded-xl hover:scale-110 "
      onClick={() => dispatch(closeMenu())}
    >
      <div className="mb-1">
        <img
          src={snippet?.thumbnails?.medium.url}
          alt="video_img"
          className="w-full rounded-md"
        />
      </div>
      <div className=" px-4">
        <p className="truncate font-semibold">{snippet?.title}</p>
        <p className=" text-sm text-gray-600">{statistics?.viewCount} views:</p>
        <p className=" text-sm text-gray-600">
          {new Date(snippet?.publishedAt).toDateString()}
        </p>
      </div>
    </Link>
  );
};

export default VideoCard;
