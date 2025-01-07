import React from "react";
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
import LoginPage from "./login/LoginPage";
import Routeconfig from "./RouteConfig";
import Navigation from "./CustomInputs/Navigation";
import { PersistGate } from "redux-persist/integration/react";
const Hello =  lazy(()=> import( "remote/Hello"));



const App = () => (
  <div className="container">
    <Suspense  fallback={<div>Loading...</div>}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <LoginPage></LoginPage> */}
    <Navigation></Navigation>
    <Routeconfig></Routeconfig>
    </PersistGate>
    </Provider>
    </Suspense>
   

  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)