import React, { useEffect, useState } from 'react';
import './Playvideo.css';
import jack1 from './../assets/jack.png';

import { value_convertor } from '../data';
import moment from "moment";
import { useParams } from 'react-router-dom';

function Playvideo() {
  const {videoId}=useParams();
  const [apidata, setApidata] = useState(null);
  const [channelName, setChannelName] = useState(null);
  const [comment, setComment] = useState([]); // Initialize as an empty array

  const API_KEY = 'AIzaSyBXSgC8Jmn8b13TvsBHDjOlsZQ8o6mjFK4';

  const commentHandle = async () => {
    try {
      const commenturl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
      const response = await fetch(commenturl);
      const data = await response.json();

      console.log(data); // Log the response to check its structure

      // Ensure `items` is an array before setting the state
      if (Array.isArray(data.items)) {
        setComment(data.items);
      } else {
        setComment([]); // Set to an empty array if `items` is not an array
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      setComment([]); // Set to an empty array in case of an error
    }
  };

  const fetchinglistdata = async () => {
    try {
      const videolisturl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(videolisturl);
      const data = await response.json();
      setApidata(data.items[0]);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const channelhandling = async (channelId) => {
    try {
      const channelurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${API_KEY}`;
      const response = await fetch(channelurl);
      const data = await response.json();
      setChannelName(data.items[0]);
    } catch (error) {
      console.error('Error fetching channel data:', error);
    }
  };

  useEffect(() => {
    commentHandle();
  }, [videoId]);

  useEffect(() => {
    fetchinglistdata();
  }, [videoId]);

  useEffect(() => {
    if (apidata) {
      channelhandling(apidata.snippet.channelId);
    }
  }, [apidata]);

  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

      <h4 className='video-title'>{apidata ? apidata.snippet.title : "Loading..."}</h4>

      <div className='play-video-info'>
        <p>{apidata ? value_convertor(apidata.statistics.viewCount) : "Loading..."} : {apidata ? moment(apidata.snippet.publishedAt).fromNow() : "Loading..."}</p>
        <div className='video-actions'>
          <span><i className="fa-solid fa-thumbs-up"></i> {apidata ? apidata.statistics.likeCount : "Loading..."}</span>
          <span><i className="fa-solid fa-thumbs-down"></i> 12</span>
          <span><i className="fa-solid fa-share"></i> Share</span>
          <span><i className="fa-solid fa-bookmark"></i> Save</span>
        </div>
      </div>

      <hr />

      <div className='publisher'>
        <img src={channelName ? channelName.snippet.thumbnails.default.url : jack1} alt='Publisher' />
        <div className='pulisher-btn'>
          <div className='publisher-info'>
            <p>{apidata ? apidata.snippet.channelTitle : "Loading..."}</p>
            <span>{channelName ? `${value_convertor(channelName.statistics.subscriberCount)} Subscribers` : "Loading..."}</span>
          </div>
          <button className='subscribe-button'>Subscribe</button>
        </div>
      </div>

      <div className='video-description'>
        <p>{apidata ? apidata.snippet.description.slice(0, 250) : "Loading..."}</p>

        <hr />

        <h4>{apidata ? apidata.statistics.commentCount : "Loading..."} comments</h4>

        {comment.length > 0 ? (
          comment.map((v, i) => (
            <div key={i} className='comment'>
              <img src={v.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='User' />
              <div className='comment-content'>
                <h3>{v.snippet.topLevelComment.snippet.authorDisplayName} <span className='comment-time'>{moment(v.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{v.snippet.topLevelComment.snippet.textOriginal}</p>
                <div className='comment-action'>
                  <i className="fa-solid fa-thumbs-up"></i> <span>{v.snippet.topLevelComment.snippet.likeCount}</span>
                  <i className="fa-solid fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
}

export default Playvideo;
