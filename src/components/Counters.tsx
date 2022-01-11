import React, {useState} from 'react';
import '../Counters.css';

function Counters() {
    const [count, setCounter] = useState(0);

    function numberUp() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function numberDown() {
        setCounter(prevCounter => prevCounter - 1);
    }

    function resetNumbers() {
        setCounter(0);
    }

    return (
        <div className="ThreeCounters">
            <div className="Counter1">
                <button onClick= {numberUp}>Up</button>
                <span className="Number"> {count} </span>
                <button onClick= {numberDown}>Down</button>
            </div>
            <div className="Counter2">
                <button onClick= {numberUp}>Up</button>
                <span className="Number"> {count} </span>
                <button onClick= {numberDown}>Down</button>
            </div>
            <div className="Counter3">
                <button onClick= {numberUp}>Up</button>
                <span className="Number"> {count} </span>
                <button onClick= {numberDown}>Down</button>
            </div>
        </div>

    )
}

export default Counters;