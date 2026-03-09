import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import reportWebVitals from './reportwebvitals';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-MKJW5WZQ', // Replace with your GTM ID
};
TagManager.initialize(tagManagerArgs);




const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize("G-VH7FR8Q8HL");
// G-RXSQ0HH7M8
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const SendAnalytics = () => {
  const analyticsData = {
    hitType: "pageview",
    page: window.location.pathname,
  };
  console.log("Sending analytics:", analyticsData);
  ReactGA.send(analyticsData);
};
reportWebVitals(SendAnalytics)


