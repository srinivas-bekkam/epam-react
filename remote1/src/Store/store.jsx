import { configureStore } from "@reduxjs/toolkit";
import { AlbumsQuery } from "hostServer/AlbumsQuery";

import { setupListeners } from "@reduxjs/toolkit/query";
import { ShoppingCartQuery } from "hostServer/ShoppingCartQuery";
import { ShoppingCartReducer } from "hostServer/ShoppingCartReducer";


export const store = configureStore({
    reducer:{
        ShoppingCart:ShoppingCartReducer,
       [AlbumsQuery.reducerPath]:AlbumsQuery.reducer,
       [ShoppingCartQuery.reducerPath]:ShoppingCartQuery.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(AlbumsQuery.middleware,ShoppingCartQuery.middleware),
})


setupListeners(store.dispatch)
