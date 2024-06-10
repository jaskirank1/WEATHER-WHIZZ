import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity , getWeatherDataForLocation} from "../Api/Index";

export const WeatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(WeatherContext); 
}

export const WeatherProvider = (props)=>{
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState("");    // jo bhi user search mein value daal raha hai voh ismein aegi 

    const fetchData = async ()=>{
        // jo bhi user ne city dali search mein voh aai searchCity ein aur uss city ka data fetch krna hai toh hame isse(searchCity ko) pass krna hoga to the api vala function so thata data il jae us city ka
        // ab jo bhi data aya usse setData se data mein daal do
        const response = await getWeatherDataForCity(searchCity);
        setData(response);    // jaise hi hum data chnage krege context ka toh jo jo component iss provider mein honge voh sab rerender honge new data ke sath 
    }

    const fetchCurrentUserLocationData = ()=>{
        // user ki loaction lo, aur position lene ka baad jo index mein function banaya hai usmein pass krdo ki hum data fetch kr pae
        // getCurrentposition pe hamne position callback dia hai
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then(data =>setData(data));
        })
    }

    return(
        <WeatherContext.Provider value={{searchCity,setSearchCity, data, fetchData, fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}