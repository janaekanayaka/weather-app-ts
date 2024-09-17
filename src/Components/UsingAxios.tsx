import React, { useState, useEffect } from 'react';
import { fetchWeatherDataAxios } from '../API/ApiHandler';
import { cities } from './CityData';
import { WeatherIcon } from './WeatherIcon';


const UsingAxios: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('london');
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    fetchWeatherDataAxios(selectedCity).then(data => setWeatherData(data));
  }, [selectedCity]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Weather App (Using Axios)</h1>
        <div className="mb-4">
          <select
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>
        {weatherData && (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5">
              <h3 className="text-lg font-medium text-gray-900">{weatherData.name}</h3>
              <p className="text-3xl font-bold">{Math.round(weatherData.main.temp - 273.15)}°C</p>
              <p className="text-sm text-gray-500">{weatherData.weather[0].description}</p>
              <WeatherIcon weatherMain={weatherData.weather[0].main} />
            </div>
            <div className="px-4 py-5 border-t">
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsingAxios;
