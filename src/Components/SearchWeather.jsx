import React from 'react'
import Input from './Input'
import Button from './Button'
import { useWeather } from '../Context/Weather'
import TempTable from './TempTable'

const SearchWeather = () => {
    const weather = useWeather();
  return (
    <div className='rightSide'>
      <img src={weather?.data?.current?.condition?.icon} alt="no pic" className='mx-2' /> 
      <h1>{weather?.data?.current?.condition?.text}</h1>
      <hr />
      <Input />
      <Button onClick={weather.fetchData} value="Search"/>
      <h6 className='cityAndCountryRight'>{weather?.data?.location?.name},{weather?.data?.location?.country}</h6>
      <div className='tableInfoRight'>
        <TempTable tempr={weather?.data?.current?.temp_c} humidity={weather?.data?.current?.humidity} windspeed={weather?.data?.current?.wind_kph} uv={weather?.data?.current?.uv} />
      </div>
    </div>
  )
}

export default SearchWeather
