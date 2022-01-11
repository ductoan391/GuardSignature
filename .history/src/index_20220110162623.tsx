import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
  <script src="https://kit.fontawesome.com/2c4dbbb156.js" crossorigin="anonymous"></script>

  <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
  
  <!-- GLIDE JS -->
  <link rel="stylesheet" href="assets/Glide/glide-3.4.1/glide-3.4.1/dist/css/glide.core.min.css"></link>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
