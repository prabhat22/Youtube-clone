import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SUGGESTED_VIDEO_LIST_URL } from "../utils/constant ";
import { getVideoDetailApi } from "../utils/helper";
import CommentsContainer from "./CommentsContainer";
import ShowReadMore from "./ShowReadMore";
import SuggestionVideoCard from "./SuggestionVideoCard";
import WatchPageShimmer from "./WatchPageShimmer";
import LiveChatContainer from "./LiveChatContainer";

export const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const isLive = params.get("isLive");
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});
  const [isReadMore, setIsReadMore] = useState(true);
  useEffect(() => {
    getVideoDetails();
    getListOfSuggestedVideos();
  }, []);

  async function getVideoDetails() {
    const response = await fetch(getVideoDetailApi(videoId));
    const data = await response.json();
    setVideoDetails(data.items[0]);
  }

  async function getListOfSuggestedVideos() {
    const response = await fetch(SUGGESTED_VIDEO_LIST_URL);
    const data = await response.json();
    setSuggestedVideos(data.items);
  }
  if (Object.keys(videoDetails).length === 0) {
    return <WatchPageShimmer />;
  }
  return (
    <>
      {videoDetails && (
        <>
          <div className="w-full relative overflow-hidden h-96 mb-5 ">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={videoDetails?.snippet?.title}
            ></iframe>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="col-start-4">
              {videoDetails && (
                <div className="flex flex-col mb-5">
                  <div>
                    <p className="font-bold text-2xl">
                      {videoDetails?.snippet?.title}
                    </p>
                  </div>
                  <div className="mb-5"></div>
                  <div
                    className={`bg-gray-300 font-normal text-md p-3 rounded-lg whitespace-pre-wrap ${
                      !isReadMore
                        ? "max-h-96 overflow-y-scroll [@media(max-width:1400px)]:scrollbar-hide"
                        : ""
                    }`}
                  >
                    <ShowReadMore
                      description={videoDetails?.snippet?.description}
                      limit={200}
                      isReadMore={isReadMore}
                      setIsReadMore={setIsReadMore}
                    />
                  </div>
                </div>
              )}
              <div>
                <p className="text-lg text-gray-700 mb-4">Comments</p>
                <CommentsContainer />
              </div>
            </div>
            <div className="col-start-8">
              {isLive?.length > 0 ? <LiveChatContainer /> : null}
              <div className="text-xl font-bold mb-2">Recommended Videos</div>
              <div className="">
                {suggestedVideos.length > 0 &&
                  suggestedVideos.map((video) => {
                    return <SuggestionVideoCard {...video} key={video.id} />;
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
