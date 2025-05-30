// src/components/WeatherForecast/WeatherForecast.jsx (Refactored)
import React from 'react';
import WeatherIcon from '../weatherIcons/WeatherIcon'; 
import WeatherData from '../weatherData/WeatherData'; 
import './WeatherForecast.css'; // Import the original CSS file

// Accept all necessary props
const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
   
    <div className="weather">

     
      <h2>{day}</h2>

     
      <WeatherIcon src={img} alt={imgAlt} />

     
      <WeatherData conditions={conditions} time={time} />

    </div>
  );
};

export default WeatherForecast;