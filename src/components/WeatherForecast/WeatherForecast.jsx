// src/components/WeatherForecast/WeatherForecast.jsx (Refactored)
import React from 'react';
import WeatherIcon from '../weatherIcons/WeatherIcon'; // Adjust path if needed
import WeatherData from '../weatherData/WeatherData'; // Adjust path if needed
import './WeatherForecast.css'; // Import the original CSS file

// Accept all necessary props
const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
   
    <div className="weather">

      {/* Render h2 directly here */}
      <h2>{day}</h2>

      {/* Render the WeatherIcon component */}
      <WeatherIcon src={img} alt={imgAlt} />

      {/* Render the WeatherData component */}
      <WeatherData conditions={conditions} time={time} />

    </div>
  );
};

export default WeatherForecast;