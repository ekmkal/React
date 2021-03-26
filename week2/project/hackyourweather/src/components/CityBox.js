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
        <div className="city-box">
            <h2 className="city-box__header">{city}, {country}</h2>
            <div className="city-box__weather">
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
