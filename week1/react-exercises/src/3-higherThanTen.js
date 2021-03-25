import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    // const addOne = () => setCount(count+1);

    return (
        <>
            <p>{feedback}</p>
            <Count count={count}/>
            {/* <Button onClick={addOne}/> */}
            <Button onClick={() => setCount(count+1)}/>
        </>
    );
};

function Count({count}) {
        
    return (
        <>
            <h4>Number: {count}</h4>
        </>
    )
};

function Button({onClick}) {
    return (
        <>
            <button onClick={onClick}>Add 1!</button>
        </>
    )
};

export default Counter;