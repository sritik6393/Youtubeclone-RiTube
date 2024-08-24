import React, { useEffect, useState } from "react";
import "./Feed.css";

import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { value_convertor } from "../../data";


function Feed({ category }) {
  const [data, setData] = useState([]);

  // Function to fetch data from YouTube API
  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    try {
      const response = await fetch(videoList_url);
      const result = await response.json(); // Convert response to JSON
      setData(result.items); // Store the video data in the state
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors
    }
  };

  // Fetch data when the component mounts or the category changes
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} /> {/* Placeholder image */}
          <h5>{item.snippet.title}</h5> {/* Video title */}
          <h6>{item.snippet.channelTitle}</h6> {/* Channel name */}
          <p>{ value_convertor(item.statistics.viewCount)} views</p> {/* View count */}
        </Link>
      ))}
    </div>
  );
}

export default Feed;
