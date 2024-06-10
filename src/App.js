import './App.css';
import { useEffect } from 'react';
import { useWeather } from './Context/Weather';
import SearchWeather from './Components/SearchWeather';
import CurrentWeatherLeft from './Components/CurrentWeatherLeft';

function App() {
  const weather = useWeather();
  useEffect(()=>{
    // get current location 
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <>
    <div className="App App-main">
      <div className='mainContainer'>
        <div className="left-side">
          <CurrentWeatherLeft/>
        </div>
        <div className="right-side">
          <SearchWeather/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
