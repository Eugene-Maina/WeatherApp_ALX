import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
const WeaherCard = () => {
  return (
    <div className="Weathercard">
<div className="search-bar">
    <input type="text" placeholder='Enter City Name' />
     <img src={search_icon} alt="search-icon" />
</div>
    </div>
  )
}

export default WeaherCard