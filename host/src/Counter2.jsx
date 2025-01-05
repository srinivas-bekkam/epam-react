import * as React from "react"

import { useState} from "react"
export default function Counter2(){
    let [counter, setCounter]=useState(0)
    return (
    <div>
        <button onClick={()=>{setCounter((ct)=>ct+1)}}>Counter2 : {counter}</button>
    </div>
    )
}