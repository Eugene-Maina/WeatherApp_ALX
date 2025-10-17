import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import air_speed from '../assets/airspeed.png'
import temperature from '../assets/temperature.png'
import hail from '../assets/hail.png'
import clear_day from '../assets/clearday.png'
import weather_mix from '../assets/weathermix.png'
import humidity from '../assets/humidity.png'
import sunny from '../assets/sun.png'
import light_Rain from '../assets/Ligtrain.png'
import Mist from '../assets/mist.png'
import Snow from '../assets/snowflake.png'
import Thunder from '../assets/thunder.png'
import Heavy_Rain from '../assets/heavy-rain.png'
import Mist_Day from '../assets/Mistight.png'
import Clear_Night from '../assets/clearnight.png'
import Broken_Clouds from '../assets/brokenclouds.png'
import Few_Clouds from '../assets/fewclouds.png'


const WeaherCard = () => {
  const inputref= useRef();
  const [weatherData, setWeatherData]=useState(false);
  const allicons={
    "01d":sunny,
    "01n":Clear_Night,
    "02d":Few_Clouds,
    "02n":Few_Clouds,
    "03d":Broken_Clouds,
    "03n":Broken_Clouds,
    "04d":Broken_Clouds,
    "04n":Broken_Clouds,
    "09d":light_Rain,
    "09n":light_Rain,
    "10d":Heavy_Rain,
    "10n":Heavy_Rain,
    "11d":Thunder,
    "11n":Thunder,
    "13d":Snow,
    "13n":Snow,
    "50d":Mist_Day,
    "50n":Mist
  }

  const Search= async (city) =>{
    if(city===""){
      alert("Please Enter a City Name");
      return;
    }
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=6b23540bd6051eb5e339af009869fecd`
      const response= await fetch(url);
      const data =await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      const icon = allicons[data.weather[0].icon] || sunny;
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon: icon
      })
      

    }catch (error){

    }
  }
  useEffect(()=>{
    Search("New York")
  },[]);

  return (
    <div className="Weathercard">
<div className="search-bar">
    <input ref={inputref} type="text" placeholder='Enter City Name' />
     <img src={search_icon} alt="search-icon"  onClick={()=>Search(inputref.current.value)}/>
</div>
 <img src={weatherData.icon} alt="clear_day icon" className='Weathericon' />
     <p className='Temps'>{weatherData.temperature}&deg;C</p>
     <p className='Location'>{weatherData.location}</p>
     <div className="Weather_data">
      <div className="col">
        <img src={humidity} alt="humidityicon" className='Humid' />
        <div><p>{weatherData.humidity}</p></div>
        <span>Humidity</span>
      </div>
      <div className="col">
        <img src={air_speed} alt="airspeedicon" className='Aispeed' />
        <div><p>{weatherData.windSpeed}</p></div>
        <span>Wind Speed</span>
      </div>
     </div>
    </div>
  )
}

export default WeaherCard