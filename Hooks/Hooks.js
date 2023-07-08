import React, { useEffect, useState } from "react";

export function Hooks() {
    const [count, setCount] = useState(0);

    const increment = () => (
        setCount(count + 1)
    );
    const decrement = () => (
        setCount(count - 1)
    );
    const reset = () => (
        setCount(0)
    );

    return (
        <div>
            <p className="text-center m-5">You clicked {count} times</p>
            <div className="text-center m-5">
            <button onClick={increment} className="bg-success w-25 h-25">
                Add
            </button>
            </div>
            <div className="text-center m-5">
            <button onClick={decrement} className="bg-danger w-25 h-25">
                Minus
            </button>
            </div>
            <div className="text-center m-5">
            <button onClick={reset} className="bg-warning w-25 h-25">
                Reset
            </button>
        </div>
        </div>
    );
}