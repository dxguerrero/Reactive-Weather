import React from "react";
import sunny from "../assets/Sunny.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import rainy from "../assets/Rainy.svg";


function WeatherCard({data}) {
  const { city, temperature, forecast } = data;

  

  const forecastIcon = {
    "Sunny": sunny,
    "Cloudy": cloudy,
    "Partly cloudy": partlyCloudy,
    "Rainy": rainy,
    "Snowy": rainy
  }

  const iconName = forecastIcon[forecast];

  return (
    <div className = "card">
        <div className = "img-container">
            <img 
              className="card-img-top" 
              alt="Card image cap" 
              id = "icon"
              src = {iconName}
            />
        </div>
        <div class="card-body">
            <h3 className="card-title">{city}</h3>
            <h5 className="card-text">{temperature}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;