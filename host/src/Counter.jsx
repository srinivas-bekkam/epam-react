import React from "react"
import { useState} from "react"
import Albums from "./Albums"
import ShoppingList from "./ShoppingList"
import Button from '@mui/material/Button';
export default function Counter(){
    let [counter, setCounter]=useState(0)
    return (
    <div>
        <button onClick={()=>{setCounter((ct)=>ct+1)}}>Counter : {counter}</button>
        {/* <Albums /> */}
        <Button variant="contained">Hello world</Button>;
        <ShoppingList/>
    </div>
    )
}