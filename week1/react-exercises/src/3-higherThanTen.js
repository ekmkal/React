import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    const addOne = () => setCount(count+1);

    return (
        <div>
            <p>{feedback}</p>
            <Count count={count}/>
            <Button onClick={addOne}/>
        </div>
    );
};

function Count({count}) {
        
    return (
        <div>
            <h4>Number: {count}</h4>
        </div>
    )
};

function Button({onClick}) {
    return (
        <div>
            <button onClick={onClick}>Add 1!</button>
        </div>
    )
};

export default Counter;