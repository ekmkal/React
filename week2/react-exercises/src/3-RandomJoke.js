import React, { useState, useEffect } from 'react';

const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            
            const endPoint = "https://official-joke-api.appspot.com/random_joke";

            try {
                const fetchResponse = await fetch(endPoint);
                const newJokeData = await fetchResponse.json();
                
                setJoke(newJokeData);
            } catch (error) {
                setIsError(true);
            }
            
            setIsLoading(false);
        };
        
        fetchData();
    }, []);

    return (
        <div>
            <Joke joke={joke} />
            {/* Loading spinner */}
            {isLoading === true && <div className="loader"></div>}
        </div>
    );
};

const Joke = ({ joke }) => {
    return (
        <div>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    );
};

export default RandomJoke;