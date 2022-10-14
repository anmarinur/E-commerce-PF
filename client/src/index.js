import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import axios from "axios";

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } = process.env;
console.log(REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID)

axios.defaults.baseURL = process.env.REACT_APP_API;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider domain={REACT_APP_AUTH0_DOMAIN} clientId={REACT_APP_AUTH0_CLIENT_ID} redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();