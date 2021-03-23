import React, { useState } from 'react';

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Async function for fetching data
    const getDogPhoto = async () => {
        setIsError(false);
        setIsLoading(true);
        
        const endPoint = "https://dog.ceo/api/breeds/image/random";

        try {
            const fetchResponse = await fetch(endPoint);
            const fetchJSON = await fetchResponse.json();
            const imgUrl = await fetchJSON.message;
            
            setDogPhotos([...dogPhotos, imgUrl]);
        } catch (error) {
            setIsError(true);
        }

        setIsLoading(false);
    };
    
    return (
        <div>
            <div>
                <Button onClick={getDogPhoto} />
            </div>
            {/* Loading spinner */}
            {isLoading === true && <div className="loader"></div>}
            {/* Checking the dogPhotos state for if it's empty or not */}
            {dogPhotos.length === 0 ? 
                <p>Get your first dog by clicking the button!</p> 
                :
                dogPhotos.map((dog, index) => <DogPhoto url={dog} key={index}/>)
            }
        </div>
    );
};

const DogPhoto = ({ url }) => {
    return (
        <img className="dogPhoto" src={url} alt={url}/>
    );
};

const Button = ({ onClick }) => {
    return (
        <button className="button" onClick={onClick}>Get a dog!</button>
    );
};

export default DogGallery;