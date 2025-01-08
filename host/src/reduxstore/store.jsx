import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ShoppingCartQuery } from "./ShoppingCartQuery";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { AlbumsQuery } from "./AlbumsQuery";
import { ShoppingCartReducer } from "./ShoppingCartReducer";
const persistConfig = {
    key: 'root',
    storage,
  }
  const rootReducer = combineReducers({
    ShoppingCart:ShoppingCartReducer,
    [AlbumsQuery.reducerPath]:AlbumsQuery.reducer,
    [ShoppingCartQuery.reducerPath]:ShoppingCartQuery.reducer
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }).concat(AlbumsQuery.middleware,ShoppingCartQuery.middleware),
})
export const persistor = persistStore(store);


setupListeners(store.dispatch)
