import React from 'react'
import "./Video.css"
import Playvideo from '../../Playvideo/Playvideo'
import "./Video.css"
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

export default function Video() {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId}></Playvideo>
      <Recommended categoryId={categoryId}></Recommended>
    </div>
  )
}
