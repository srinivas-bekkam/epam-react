import React from "react";
import { lazy, Suspense } from 'react';

import ReactDOM from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.scss";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import LoginPage from "./login/LoginPage";
const Hello =  lazy(()=> import( "remote/Hello"));



const App = () => (
  <div className="container">
    <Suspense  fallback={<div>Loading...</div>}>
    <Provider store={store}>
    <LoginPage></LoginPage>
    </Provider>
    </Suspense>
   

  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)