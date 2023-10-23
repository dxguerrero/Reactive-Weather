import React from 'react';
import cities from '../data';

function Location ({cities, location, setLocation}) {
    
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
    

module.exports = Location;