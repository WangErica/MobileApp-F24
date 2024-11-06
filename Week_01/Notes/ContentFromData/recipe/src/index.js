// import React and ReactDOM libraries for use
import React from 'react';
import ReactDOM from 'react-dom/client';
// import our main parent app component
import App from './App';


// grab and store our own root div element as a variable
const root = ReactDOM.createRoot(document.getElementById('root'));
//use reactDOM to render our react project
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
