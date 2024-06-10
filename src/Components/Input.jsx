import React from 'react'
import { useWeather } from '../Context/Weather'
// ab context se data uthana hai toh useWeather toh lana hi padega 

const Input = () => {
    const weather = useWeather();
  return (
      <input className="input-field mx-3" 
        value={weather.searchCity}
        placeholder='Search Here' 
        onChange={(e)=>{
            // jo bhi user ne city dali hai usse setcity krva dege 
            weather.setSearchCity(e.target.value)
        }}  />
  )
}

export default Input
