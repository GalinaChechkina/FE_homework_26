import { useState } from "react";

export default function HideText(){

    const [isState, setState] = useState(true);

    return(
        <div>
            {isState && <p>Text</p>}
            <button onClick = {()=> setState(!isState)}>Click me!</button>
        </div>

    );
};