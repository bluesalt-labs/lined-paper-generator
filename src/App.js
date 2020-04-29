import React from 'react';

import './App.scss';

import {
  PrintPage
} from './components'

function App() {
  return (
    <div className="App">
      

      <PrintPage>
        <span>Test content</span>
        <span>Test</span>
      </PrintPage>      

    </div>
  );
}

export default App;
