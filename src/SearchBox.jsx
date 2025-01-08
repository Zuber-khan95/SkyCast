import * as React from 'react';
import './SearchBox.css'
import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchBox({updateInfo}){
  let [FormData,SetFormData]=useState({
    Search:"",
  });
  let [Error,SetError]=useState(false);

  const API_URL="http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY="a689966f6954351ff30f2e34c4eef34d";

  let getWeatherInfo=async()=>{
    try{
const Response=await fetch(`${API_URL}?q=${FormData.Search}&appid=${API_KEY}`);
const jsonResponse=await Response.json();
let result={
  Longitude:jsonResponse[0].lon,
  latitude:jsonResponse[0].lat,
  City:jsonResponse[0].name,
  State:jsonResponse[0].state,
  Country:jsonResponse[0].country,
}
return result;
}
catch (err) {
  throw err;
}
  }


  function  handleSearchChange(event){
    SetFormData((CurrData)=>{
      return {...CurrData,[event.target.name]:event.target.value};}
      );

  }

  let handleSubmit=async (event)=>{
    try{
      event.preventDefault();
      SetFormData({Search:""});
      let newInfo=await getWeatherInfo();
      updateInfo(newInfo);
    }
    catch(err){
      SetError(true);
    }
  }
  return (
    <div className="SearchBox">
 <h3> SkyCast, Search for Weather
 </h3>
  <form onSubmit={handleSubmit}>
  <TextField label="Enter City Name" color="secondary" focused type="text"  value={FormData.Search} onChange={handleSearchChange} name="Search"/>
  <br /><br />
  <Button type="submit" variant="contained" size="medium">
        Search
        </Button>
  </form>
  {Error && <p style={{color:"red"}}> No such place exists..</p>}
  </div>
  );
}


    

