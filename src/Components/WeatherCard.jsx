import React, { useState } from 'react'
import { useWeather } from '../Context/Weather'

const WeatherCard = () => {
    const weather = useWeather();
  return (
    <div className='container cards'> 
      {/* we have to add ? here because the data will be null for first time so it will be null */}
      <img src={weather?.data?.current?.condition?.icon} alt="no pic" className='mx-2' /> 
      {/* <img src={tempImg} alt="no pic" className='mx-2' />  */}
      <div className='temp'>{weather.data?.current?.temp_c} C</div>
      <h5>{weather.data?.location?.name}, {weather.data?.location?.region}{" "} {weather?.data?.location?.country} </h5>
    </div>
  )
}

export default WeatherCard