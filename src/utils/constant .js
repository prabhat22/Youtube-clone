export const API_KEY = "AIzaSyCS_BhyuiYTjqFFQODpFBHDhVEwe__4mKc";
export const VIDEO_LIST_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

export const YOUTUBE_CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key=" +
  API_KEY;

export const SUGGESTED_VIDEO_LIST_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cid&chart=mostPopular&locale=em&maxResults=10&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const VIDEOS_BY_CATEGORY_API = VIDEO_LIST_URL + "&videoCategoryId=";

export const MAX_CHAT_MSG_COUNT = 25;

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&regionCode=IN&key=" +
  API_KEY+"&q=";
