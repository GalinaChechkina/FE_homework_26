import { useState } from "react"

export default function Text(){
    
    const [state, setState] = useState<string>("");

    return(
        <div>
            <form>
                <input onChange = {(event): void=> setState(event.target.value)} type= "text" />
            </form>
            <p>{state}</p>
        </div>
    )
}