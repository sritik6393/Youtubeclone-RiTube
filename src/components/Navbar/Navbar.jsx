import React from 'react'
import './Navbar.css'
import ritik from '../../assets/ritik.png'

import ritiksoni from '../../assets/ritiksoni.JPG'
import {Link} from 'react-router-dom'

function Navbar({setSidebar}) {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
      
        <i className="fa-solid fa-bars" onClick={()=>setSidebar(prev=>prev===false ? true : false)}></i>
        <Link to='/'><img src={ritik} className='logo' style={{ width: '110px' }} alt="Logo" /></Link>
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className='nav-right flex-div'>
        <i className="fa-solid fa-house"></i>
        <i className="fa-solid fa-bell"></i>
        <img src={ritiksoni} className="user-icon" style={{width:'50px', height:'50px'}} alt="User Icon" />
      </div>
    </nav>
  )
}

export default Navbar
