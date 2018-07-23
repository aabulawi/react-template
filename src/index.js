import App from "./js/App";
import ReactDOM from 'react-dom'
import React from 'react';

const wrapper = document.getElementById("react-root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;