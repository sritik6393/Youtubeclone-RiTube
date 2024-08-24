import React from "react";
import "./Sidebar.css";

import jack from './../assets/jack.png'
import megan from './../assets/megan.png'
import simon from './../assets/simon.png'
import tom from './../assets/tom.png'
import cameron from './../assets/cameron.png'
function Sidebar({sidebar,category,setCategory}) {
  return (
    <div className={`Sidebar  ${sidebar? " " : "small-sidebar"}`}>
      <div className="sortcuts-Link">
        <div className={`side-link ${category===0 ? " active":" "}`} onClick={()=>setCategory(0)}>
          <i className="fa-solid fa-house-crack"></i><p>Home</p>
        </div>
        <div className={`side-link ${category===23 ? " active":" "}`}  onClick={()=>setCategory(23)}>
        <i className="fa-solid fa-gamepad"></i><p>Comeady</p>
        </div>
        <div className={`side-link ${category===2 ? " active":" "}`}  onClick={()=>setCategory(2)}>
        <i className="fa-solid fa-mobile"></i><p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17 ? " active":" "}`}  onClick={()=>setCategory(17)}>
        <i className="fa-solid fa-volleyball"></i><p>Sports</p>
        </div>
        <div className={`side-link ${category===28 ? " active":" "}`}  onClick={()=>setCategory(28)}>
        <i className="fa-solid fa-microchip"></i><p>Technical</p>
        </div>
        <div className={`side-link ${category===10 ? " active":" "}`}  onClick={()=>setCategory(10)}>
          <i className="fa-solid fa-music"></i><p>Music</p>
        </div>
        <div className={`side-link ${category===20 ? " active":" "}`}  onClick={()=>setCategory(20)}>
        <i className="fa-solid fa-blog"></i><p>Gaming</p>
        </div>
        <div className={`side-link ${category===25? " active":" "}`}  onClick={()=>setCategory(25)}>
        <i className="fa-solid fa-newspaper"></i><p>News</p>
        </div>
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack}></img><p>Piewie lee</p>
        </div>
        <div className="side-link">
          <img src={megan}></img><p>Dezi swa</p>
        </div>
        <div className="side-link">
          <img src={simon}></img><p>luka glasiya </p>
        </div>
        <div className="side-link">
          <img src={tom}></img><p>Rehain barren</p>
        </div>
        <div className="side-link">
          <img src={cameron}></img><p>Tim pane</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
