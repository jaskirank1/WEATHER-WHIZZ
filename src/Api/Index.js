const baseUrl = "https://api.weatherapi.com/v1/current.json?key=2fd8c6eeb6044400848155722240906";
// const baseUrl = "https://api.openweathermap.org/data/3.0/onecall?"
// const apiID = "appid=4143a21ea6be52d4f63d350eae831aa0";
// yeah city ke lie data laege - but yeah city se sahi data nhi de rha hai 
export const getWeatherDataForCity = async (city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return await response.json();
}

// yeah user jaise hi website khole toh usko uski city ka weather dikhe toh usko krne ke lie hamne yeah function banaya 
//yeah latitude aur longitutde ke basis pe data laege jo ki same ho hoga city vale se
export const getWeatherDataForLocation = async (lat, lon)=>{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}

// using new api
// export const getWeatherDataForLocation = async (lat, lon)=>{
//     const response = await fetch(`${baseUrl}lat=${lat}&lon=${lon}&${apiID}`);
//     return await response.json();
// }