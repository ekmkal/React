import React, { useState, useEffect } from 'react';
import ListOfCities from './ListOfCities';

const SearchBar = () => {
    const [cityName, setCityName] = useState("");
    const [cityWeather, setCityWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [notFound, setNotFound] = useState("");

    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    const handleInput = e => {
        setCityName(e.target.value);
    };

    const submitForm = async (e) => {
        e.preventDefault();

        setIsError(false);
        setIsLoading(true);

        try {
            const newWeatherData = await fetch(`
                http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}
            `);
            const newCityWeather = await newWeatherData.json();

            // Check for avoiding duplication of a city and the success of the fetching
            !cityWeather.find(city => city.id === newCityWeather.id) && newCityWeather.cod === 200 ?
                // Preffered to keep the previous cities to show
                setCityWeather([...cityWeather, newCityWeather]) 
                :
                setCityWeather([...cityWeather]);

            // Check for "not found" response
            newWeatherData.status === 404 ? 
                setNotFound(newCityWeather.message.charAt(0).toUpperCase() + newCityWeather.message.slice(1))
                : 
                setNotFound("");
        } catch (error) {
            setIsError(true);
        };

        setIsLoading(false);
    };
    
    return (
        <>
            <div className="searchBar">
                <form onSubmit={submitForm}>
                    <input 
                        className="textInput" 
                        type="text" 
                        value={cityName}
                        placeholder="Search City" 
                        onChange={handleInput} 
                    />
                    <input 
                        className="submit" 
                        type="submit" 
                        value="Search" 
                    />
                </form>
                <div>
                    {
                        cityWeather.length === 0 &&
                        isError === false && 
                        notFound === "" && 
                        <h3>No city search yet!</h3>
                    }
                    {
                        isError === true && 
                        <h3>An error occured, try again!</h3>
                    }
                    {
                        notFound !== "" && 
                        <h3>{notFound}!</h3>
                    }
                    {
                        isLoading === true && 
                        <div className="loader"></div>
                    }
                </div>
            </div>
            {
                cityWeather.length > 0 && 
                <ListOfCities cityWeather={cityWeather} />
            }
        </>
    );
};

export default SearchBar;