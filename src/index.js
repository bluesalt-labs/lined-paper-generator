import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Contexts and Context reducer constants
import {
  useAppStateValue,
  AppProvider,
  appInitialState,
  appReducer
} from 'contexts'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider reducer={appReducer} initialState={appInitialState}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
