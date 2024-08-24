import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

function Home({sidebar}) {
  const [category,setCategory]=useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}> </Sidebar>
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed  category={category} ></Feed>
      </div>

    </>
  )
}

export default Home