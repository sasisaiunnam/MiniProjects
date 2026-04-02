import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter-wrapper">
            <div className="counter-card">
                <h3 className="counter-title">Counter App</h3>
                <p className="counter-display">{count}</p>
                
                <div className="button-group">
                    <button className="btn btn-inc" onClick={increment}>Increment</button>
                    <button className="btn btn-dec" onClick={decrement}>Decrement</button>
                    <button className="btn btn-reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;