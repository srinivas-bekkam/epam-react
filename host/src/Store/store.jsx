import { configureStore } from "@reduxjs/toolkit";
import { AlbumsQuery } from "./AlbumsQuery";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
       [AlbumsQuery.reducerPath]:AlbumsQuery.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(AlbumsQuery.middleware),
})


setupListeners(store.dispatch)
