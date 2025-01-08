import SearchBox from './SearchBox.jsx'
import InfoBox from './infoBox'
import {useState} from 'react'
export default function WeatherApp(){
  let [weatherInfo,SetWeatherInfo]=useState({
    Longitude:28.65,
    latitude:80.89,
    City:"Lucknow",
    State:"Uttar Pradesh",
    Country:"India"
  });

  let updateInfo=(newInfo)=>{
    SetWeatherInfo(newInfo);
  }
  return (
    <div>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox Info={weatherInfo}/>

    </div>
  )
}