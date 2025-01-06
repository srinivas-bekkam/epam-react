import React from "react";
import ReactDOM from "react-dom/client";
import {lazy} from "react"

import "./index.css";
import Hello from "./Hello";
import { Provider } from "react-redux";
import { store } from "./Store/store";
const Counter =  lazy(()=> import( "hostServer/Counter"));

const App = () => (
  <div className="container">
    <Provider store={store}>
    <Hello/>
    <Counter/>
    </Provider>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)