import React, { useState } from 'react';

const Friend = () => {
    const [friend, setFriend] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Async function for fetching data
    const getFriend = async () => {
        setIsError(false);
        setIsLoading(true);

        const endPoint = "https://www.randomuser.me/api?results=1";

        try {
            const fetchResponse = await fetch(endPoint);
            const fetchJSON = await fetchResponse.json();
            const friendData = await fetchJSON.results[0];

            setFriend(friendData);
        } catch (error) {
            setIsError(true);
        };
        setIsLoading(false);
    };
    
    return (
        <div>
            <Button onClick={getFriend} />
            {/* Loading spinner */}
            {isLoading === true && <div className="loader"></div>}
            {/* Checking if the friend object empty or not */}
            {Object.keys(friend).length !== 0 && <FriendProfile friend={friend} />}
        </div>
    );
};

const FriendProfile = ({ friend }) => {
    return (
        <ul className="friendInfo">
            <li>
                First Name:<br/>
                <em>{friend.name.first}</em>
            </li>
            <li>
                Last Name:<br/>
                <em>{friend.name.last}</em>
            </li>
            <li>
                Address:<br/>
                <em>
                {friend.location.street.number} {friend.location.street.name}<br/>
                {friend.location.city} {friend.location.state} {friend.location.postcode}
                </em>
            </li>
            <li>
                Country:<br/>
                <em>{friend.location.country}</em>
            </li>
            <li>
                Email:<br/>
                <em>{friend.email}</em>
            </li>
        </ul>
    );
};

const Button = ({ onClick }) => {
    return (
        <button className="button" onClick={onClick}>Get a friend!</button>
    );
};

export default Friend;