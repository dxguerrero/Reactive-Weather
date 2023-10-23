import React, {useState} from 'react';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import cities from './data'
// Import data and WeatherCard here


function App() {
    const [location, setLocation] = useState("New York City")

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                
                {cities.map((city, idx) => <WeatherCard key={idx} data={city}/>)}
                


            </div>
            
        </>
    )
}

export default App;