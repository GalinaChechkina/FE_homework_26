import { useState } from "react";

export default function HideText(){

    const [isState, setState] = useState(true);

    return(
        <div>
            <button onClick = {()=> setState(!isState)}>Click me!</button>
            { isState ? <p>Text</p>: "" }
            {/* {isState && <p>Text</p>} */}
        </div>

    );
};