import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

export const inject = parentElementId => {
    // compiled with the guest app, this uses a React 18 API
    return createRoot(document.getElementById(parentElementId)).render(<App />);
}

export const unmount = parentElementId =>
  ReactDOM.unmountComponentAtNode(document.getElementById(parentElementId));
