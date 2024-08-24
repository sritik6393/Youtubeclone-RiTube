import React, { useEffect, useState } from 'react';
import "./Recommended.css";
import { value_convertor } from '../../data';
import {Link} from "react-router-dom"

function Recommended({ categoryId }) {
  const API_KEY = 'AIzaSyBXSgC8Jmn8b13TvsBHDjOlsZQ8o6mjFK4';
  const [apidatas, setApidata] = useState([]);

  const fetchingapidats = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&maxResults=30&key=${API_KEY}`;
    await fetch(url)
      .then(res => res.json())
      .then(data => setApidata(data.items));
  }

  useEffect(() => {
    fetchingapidats();
  }, [categoryId]);

  return (
    <div className='recommended'>
      {
        apidatas.map((v, i) => (
          <Link to={`/video/${v.snippet.categoryId}/${v.id}`}className='side-video-list' key={i}>
            <img src={v.snippet.thumbnails.default.url} alt="Video Thumbnail" />
            <div className='vid-info'>
              <h4>{v.snippet.title}</h4>
              <p>{v.snippet.channelTitle}</p>
              <p>{value_convertor(v.statistics.viewCount)} views</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default Recommended;
