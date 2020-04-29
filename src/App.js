import React from 'react'

import './App.scss'

import {
  useAppStateValue,
} from 'contexts'

import {
  Header,
  Settings,
  PrintPage,
  LinedPaper
} from 'components'

export function App() {
  const [{ lineCount, lineWidth, lineSpace, lineColor }] = useAppStateValue()


  return (
    <div className="App">
        <Header />

        <Settings />  

      <PrintPage>
        <LinedPaper
          lineCount={lineCount}
          width={lineWidth}
          space={lineSpace}
          color={lineColor}
        />
      </PrintPage>
    </div>
  );
}

export default App;
