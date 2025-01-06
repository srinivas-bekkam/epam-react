import * as React from "react"

import { useState} from "react"
import Albums from "./Albums"
export default function Counter(){
    let [counter, setCounter]=useState(0)
    return (
    <div>
        <button onClick={()=>{setCounter((ct)=>ct+1)}}>Counter : {counter}</button>
        <Albums />
    </div>
    )
}