import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import air_speed from '../assets/airspeed.png'
import temperature from '../assets/temperature.png'
import hail from '../assets/hail.png'
import clear_day from '../assets/clearday.png'
import weather_mix from '../assets/weathermix.png'
import humidity from '../assets/humidity.png'
const WeaherCard = () => {
  const Search= async (city) =>{
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b23540bd6051eb5e339af009869fecd `
      const response= await fetch(url);
      const data =await response.json();
      console.log(data);
      

    }catch (error){

    }
  }
  useEffect(()=>{
    Search("Nairobi")
  },[]);

  return (
    <div className="Weathercard">
<div className="search-bar">
    <input type="text" placeholder='Enter City Name' />
     <img src={search_icon} alt="search-icon" />
</div>
 <img src={clear_day} alt="clear_day icon" className='Weathericon' />
     <p className='Temps'>16 C</p>
     <p className='Location'>Nairobi</p>
     <div className="Weather_data">
      <div className="col">
        <img src={humidity} alt="humidityicon" className='Humid' />
        <div><p>91%</p></div>
        <span>Humidity</span>
      </div>
      <div className="col">
        <img src={air_speed} alt="airspeedicon" className='Aispeed' />
        <div><p>4.5-Km/h</p></div>
        <span>Wind Speed</span>
      </div>
     </div>
    </div>
  )
}

export default WeaherCard