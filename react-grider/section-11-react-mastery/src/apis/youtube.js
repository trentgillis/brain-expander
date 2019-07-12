import axios from "axios";

const KEY = "AIzaSyBxYCMIuLaWMPiKUAvNg7zdElEzxNbK0UA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});