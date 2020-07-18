/*global FB*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.mount = () => {
  var body = document.getElementsByTagName('head')[0];
  var js = document.createElement("script");
  js.async = true;
  js.defer = true;
  js.crossorigin = "anonymous";
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  body.appendChild(js);

  ReactDOM.render(<App />,
    document.getElementById('consentimento')
  );
};

window.fbAsyncInit = function () {
  FB.init({
    appId: '1443802939161193',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v7.0'
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
