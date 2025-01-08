import {createSlice} from "@reduxjs/toolkit"
import { act } from "react"
const ShoppingCart=createSlice({
    name:"ShoppingCart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart=[...state.cart, action.payload]
        },
        clearCart:(sate)=>{
            state.cart=[]
        }
    
    }
})
export const cart= (state)=> state.ShoppingCart.cart;
export const {addToCart, clearCart}=ShoppingCart.actions;
export const ShoppingCartReducer = ShoppingCart.reducer
