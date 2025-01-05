import React from "react";
import { lazy, Suspense } from 'react';

import ReactDOM from "react-dom/client";


import "./index.css";
import Counter from "./Counter";
const Hello =  lazy(()=> import( "remote/Hello"));



const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Suspense  fallback={<div>Loading...</div>}>
    <Hello/>
    </Suspense>
    <Counter/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)