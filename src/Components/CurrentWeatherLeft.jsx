import React from 'react'
import { useWeather } from '../Context/Weather'

const CurrentWeatherLeft = () => {
    const weather = useWeather();
  return (
    <div className='mainLeftContent'>
        <div className="upperData">
            <h2>{weather?.data?.location?.name}</h2>
            <h4>{weather?.data?.location?.country}</h4>
        </div>
      <div className="bottom-data">
        {/* {setInterval(() => {
            weather?.data?.location?.localtime;  
        }, 1000)} */}
        <div className="bottom-left">
            <h3>{weather?.data?.location?.localtime}</h3>
        </div>
        <div className="bottom-right">
            {weather?.data?.current?.temp_c}&deg;C
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherLeft
