import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CacheProvider } from '@emotion/react';
import { persistor, store } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
