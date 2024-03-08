import { useState } from "react";
export default function Counter(){

    const [state, setState] = useState<number>(0);

    return (
        <div>
            <p>{state}</p>
            <button onClick={()=> setState(state-1)}>-1</button>
            <button onClick={()=> setState(state+1)}>+1</button>
            <button onClick={()=> setState(0)}>reset_counter_value</button>
            <button onClick={()=> setState(2*state)}>double_counter_value</button>
        </div>
    );
};