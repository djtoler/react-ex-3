import React, {useState} from 'react';
import '../Counters.css';

function Counters() {
    const [count1, setCounter1] = useState(0);
    
    function numberUp1() {
        setCounter1(prevCounter => prevCounter + 1);
    }
    function numberDown1() {
        setCounter1(prevCounter => prevCounter - 1);
    }


    return (
        // <div className="ThreeCounters">
        //     <div className="Counter1">
        //         <button onClick= {numberUp1}>Up</button>
        //         <span className="Number"> {count1} </span>
        //         <button onClick= {numberDown1}>Down</button>
        //     </div>
        // </div>

        <div className="ThreeCounters">
            <div className='Counter1'>
                <button onClick={() => setCounter1(count1 + 1)}>Up</button>
                <p>{count1}</p>
                <button onClick={() => setCounter1(count1 - 1)}>Down</button>
            </div>
        </div>

    )
}

export default Counters;