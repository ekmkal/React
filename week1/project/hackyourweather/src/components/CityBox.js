import React from 'react'

const CityBox = ({
    city, 
    country, 
    weatherMain, 
    weatherDesc, 
    maxTemp, 
    minTemp, 
    lat,
    lon
}) => {
    return (
        <div className="cityBox">
            <h2 className="cityName">{city}, {country}</h2>
            <div className="cityWeather">
                <h3>{weatherMain}</h3>
                <p>{weatherDesc}</p>
            </div>
            <p>max temp: {maxTemp}</p>
            <p>min temp: {minTemp}</p>
            <p>location: {lat}, {lon}</p>
        </div>
    );
};

export default CityBox;
