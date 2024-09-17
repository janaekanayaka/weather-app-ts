import React from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';

export const WeatherIcon: React.FC<{ weatherMain: string }> = ({ weatherMain }) => {
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return <Sun className="h-12 w-12 text-yellow-400" />;
    case 'clouds':
      return <Cloud className="h-12 w-12 text-gray-400" />;
    case 'rain':
      return <CloudRain className="h-12 w-12 text-blue-400" />;
    case 'snow':
      return <Snowflake className="h-12 w-12 text-blue-200" />;
    default:
      return <Sun className="h-12 w-12 text-yellow-400" />;
  }
};
