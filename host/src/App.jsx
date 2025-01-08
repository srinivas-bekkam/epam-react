import React, { useState } from "react";
import { lazy, Suspense } from 'react';

import ReactDOM from "react-dom/client";
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./index.scss";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { persistor, store } from "./Store/store";
import LoginPage from "./Pages/login/LoginPage";
import Routeconfig from "./routing/RouteConfig";
import Navigation from "./CustomInputs/Navigation";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Router } from "react-router-dom";
import { LoginContext } from "./providers/LoginContext";
import { isAuthenticated } from "./services/LoginStatus";
const Hello =  lazy(()=> import( "remote/Hello"));



const App = () => {
  const isLoggedIn= isAuthenticated()
  const [auth, setAuth]= useState(isLoggedIn)
  return(
  <div className="container">
    <Suspense  fallback={<div>Loading...</div>}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <LoginContext.Provider value={[auth,setAuth]}>

    {/* <LoginPage></LoginPage> */}
    <Navigation></Navigation>
    <Routeconfig></Routeconfig>
    </LoginContext.Provider>
    </BrowserRouter>

    </PersistGate>
    </Provider>
    </Suspense>
   

  </div>)
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)