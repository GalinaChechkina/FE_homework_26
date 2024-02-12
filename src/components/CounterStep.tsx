import { useState } from "react";
export default function CounterStep(){
    const [state, setState] = useState<number>(0);
    const [stateStep, setStateStep] = useState<number>(0);

    return (
        <div>
        <p>{state}</p>
        <button onClick = {()=> setState(state+stateStep)}>+1</button>
        <button onClick = {()=> setState(state-stateStep)}>-1</button>
        <p>{stateStep}</p>
        <button onClick = {()=> setStateStep(stateStep+1)}>+1</button>
        <button onClick = {()=> setStateStep(stateStep-1)}>-1</button>
        </div>
    );

};