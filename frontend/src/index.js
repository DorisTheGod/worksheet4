import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import App from "./App";
import "./index.css";

//Create a root 
const root = ReactDomClient.createRoot(
  document.getElementById('root')
);

root.render(<App />);