import App from "./js/App";
import ReactDOM from 'react-dom'
import React from 'react';
import { injectGlobal } from 'emotion'

injectGlobal`
    ${require('raw-loader!normalize.css')}
`;

const wrapper = document.getElementById("react-root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;