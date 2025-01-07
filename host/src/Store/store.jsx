import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AlbumsQuery } from "./AlbumsQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ShoppingCartQuery } from "./ShoppingCartQuery";
import ShoppingCart from "./ShoppingCartReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
//   const rootReducer = combineReducers({
//     ShoppingCart:ShoppingCart,
//     [AlbumsQuery.reducerPath]:AlbumsQuery.reducer,
//     [ShoppingCartQuery.reducerPath]:ShoppingCartQuery.reducer
//   })
//   const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer:{
        ShoppingCart:ShoppingCart,
       [AlbumsQuery.reducerPath]:AlbumsQuery.reducer,
       [ShoppingCartQuery.reducerPath]:ShoppingCartQuery.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(AlbumsQuery.middleware,ShoppingCartQuery.middleware),
})


setupListeners(store.dispatch)
