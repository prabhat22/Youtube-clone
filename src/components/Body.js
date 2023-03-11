import React, { useEffect, useState } from "react";
import {
  VIDEOS_BY_CATEGORY_API,
  VIDEO_LIST_URL,
  YOUTUBE_CATEGORIES_API,
  YOUTUBE_SEARCH_API,
} from "../utils/constant ";
import ShimmerCard from "./ShimmerCard";
import VideoCard from "./VideoCard";
import CategoriesList from "./CategoriesList";

import Error from "./Error";
import LiveVideoCard from "./LiveVideoCard";
import { useSelector } from "react-redux";
const Body = () => {
  const [categoriesList, setCategories] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isError, setIsError] = useState(false);
  const searchValue = useSelector((store) => store.search.query);

  useEffect(() => {
    getCategoriesList();
  }, []);

  useEffect(() => {
    getVideosByCategory();
  }, [selectedCategory]);

  useEffect(() => {
    if(searchValue.length > 0) {
      getSearchResults();
    }
 
  }, [searchValue]);
  

  async function getSearchResults() {
    const url = YOUTUBE_SEARCH_API;
    const response = await fetch(url + searchValue);
    const data = await response.json();
   console.log("searchRsults", data);
   setVideoList(data.items);
  }

  async function getCategoriesList() {
    const response = await fetch(YOUTUBE_CATEGORIES_API);
    const data = await response.json();
    setCategories([{ snippet: { title: "ALL" }, id: "" }, ...data.items]);
  }

  async function getVideosByCategory() {
    const url = selectedCategory
      ? VIDEOS_BY_CATEGORY_API + selectedCategory
      : VIDEO_LIST_URL;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      if (data?.error) {
        setIsError(true);
      } else {
        setVideoList(data.items);
        setIsError(false);
      }
    } catch (error) {
      setIsError(true);
    }
  }

  if (categoriesList.length === 0) {
    return <ShimmerCard />;
  }
  return (
    <>
      {categoriesList.length > 0 && (
        <div className="filter-list flex flex-row  overflow-x-auto gap-4 mb-4 [@media(max-width:1400px)]:scrollbar-hide ">
          <CategoriesList
            categoriesList={categoriesList}
            categoryHandler={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
      {isError ? (
        <Error />
      ) : (
        <div className="video-list-container flex flex-row gap-4 flex-wrap  ">
          <LiveVideoCard />
          {videoList &&
            videoList.map((video) => {
              return <VideoCard key={video.etag} {...video} />;
            })}
        </div>
      )}
    </>
  );
};

export default Body;
