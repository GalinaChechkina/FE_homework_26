import { useState } from "react"

export default function Text(){
    
    const [state, setState] = useState<string>("");

    return(
        <div>
            <form>
                {/* фиксируем каждое изменение input */}
                <input onChange = {(event): void=> setState(event.target.value)} type= "text" value={state} />
            </form>
            {/* в параграф запишем новый state */}
            <p>{state}</p>
        </div>
    )
}