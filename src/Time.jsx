import React from "react";
import { useState } from "react";

const Time = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </>
    );
}

export default Time;