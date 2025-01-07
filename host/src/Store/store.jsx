import { configureStore } from "@reduxjs/toolkit";
import { AlbumsQuery } from "./AlbumsQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ShoppingCartQuery } from "./ShoppingCartQuery";

export const store = configureStore({
    reducer:{
       [AlbumsQuery.reducerPath]:AlbumsQuery.reducer,
       [ShoppingCartQuery.reducerPath]:ShoppingCartQuery.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(AlbumsQuery.middleware,ShoppingCartQuery.middleware),
})


setupListeners(store.dispatch)
