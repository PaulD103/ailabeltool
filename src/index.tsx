import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index.ts';

const myElement: HTMLElement | null = document.getElementById('root');
var root: any;

if (myElement != null) {
  root = ReactDOM.createRoot(myElement); 
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
