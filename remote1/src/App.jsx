import React from "react";
import ReactDOM from "react-dom/client";
import {lazy} from "react"

import "./index.css";
import Hello from "./Hello";
const Counter =  lazy(()=> import( "hostServer/Counter"));


const App = () => (
  <div className="container">
    <div>Name: remote1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Hello/>
    <Counter/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)