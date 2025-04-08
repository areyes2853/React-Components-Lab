
import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ({ src, alt }) => {
    // Return only the img tag to fit into the parent structure
    return <img src={src} alt={alt} />;
  };
  
  export default WeatherIcon;
