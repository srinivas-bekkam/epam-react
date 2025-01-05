import * as React from "react"

import { useState} from "react"
import Counter2 from "./Counter2"
import Header from "./Header"
export default function Counter(){
    let [counter, setCounter]=useState(0)
    return (
    <div>
        <button onClick={()=>{setCounter((ct)=>ct+1)}}>Counter : {counter}</button>
        <Counter2/>
        <Header/>
    </div>
    )
}