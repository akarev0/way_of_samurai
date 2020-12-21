import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let categories = [
    { id: 1, title: "Clothes"},
    { id: 1, title: "Footwear"},
    { id: 1, title: "Footwear"},
]

let products = [
    { id: 1, title: "First product"},
    { id: 1, title: "Second product"},
    { id: 1, title: "Third product"},
]

ReactDOM.render(
  <React.StrictMode>
    <App categories={categories} products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
