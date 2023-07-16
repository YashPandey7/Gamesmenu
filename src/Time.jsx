import React from "react";
import { useReducer } from "react";

const Time = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if(action.type === "Increment")
        {
            state = state + 1;
        }
        if(action.type === "Decrement")
        {
            state = state - 1;
        }
        return state;
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p>{state}</p>
            <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
        </>
    );
}

export default Time;