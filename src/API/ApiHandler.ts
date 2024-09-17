import axios from 'axios';

const API_KEY = '6950544f2c6077d6954d0bc98e7b133e'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    if(response.ok){
        console.log("response ok")
    }
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchWeatherDataAxios = async (city: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
