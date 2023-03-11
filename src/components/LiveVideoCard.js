import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/MenuSlice";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LiveVideoCard = () => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/watch?v=${'amz3WjKERIc'}&isLive=true`}
      className="w-40 group sm:w-56 cursor-pointer  hover:shadow-xl hover:rounded-xl hover:scale-110 "
      onClick={() => dispatch(closeMenu())}
    >
      <div className="mb-1">
        <img
          src="https://www.twinflamescoach.com/wp-content/uploads/2022/04/Live-Stream.jpg"
          alt="video_img"
          className="w-full rounded-md h-28"
        />
      </div>
      <div className=" px-4">
        <p className="truncate font-semibold">Live Video Streaming</p>
        <p className=" text-sm text-gray-600">{new Date().toDateString()}</p>
        <p className=" bg-red-500 flex items-center px-4 w-max text-white rounded-xl animate-pulse">
          <FontAwesomeIcon icon={faPlay} size="sm" stroke="0" />
          <span>Live</span>
        </p>
      </div>
    </Link>
  );
};

export default LiveVideoCard;
