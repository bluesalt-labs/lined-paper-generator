import React from 'react'

import './Settings.scss'

import {
  useAppStateValue,
    SET_LINE_COUNT,
    SET_LINE_WIDTH,
    SET_LINE_SPACE,
    SET_LINE_COLOR,
} from 'contexts'

import {
  Color,
  Text,
  Number
} from 'components'

export function Settings(props) {
  const [{
    lineCount, lineWidth, lineSpace, lineColor 
  }, appDispatch] = useAppStateValue()

  function handleInputChange(key, value) {
    switch(key) {
      case 'line-color':
        appDispatch({ type: SET_LINE_COLOR, value: value }); break;
      case 'line-width':
        appDispatch({ type: SET_LINE_WIDTH, value: value }); break;
      case 'line-space':
        appDispatch({ type: SET_LINE_SPACE, value: value }); break;
      case 'line-count':
        appDispatch({ type: SET_LINE_COUNT, value: value }); break;
    }
  }

  const inputContainerStyle = {
    display: 'flex',
  }

  const inputItemStyle = {
    justifyContent: 'space-evenly',
    flexGrow: 1,
    padding: '0.5rem 2rem',
  }

  return (
    <section className="Settings page-section">
      <div className="page-section-content" style={inputContainerStyle}>
        <Color
          style={inputItemStyle}
          valueKey="line-color"
          value={lineColor}
          label="Line Color"
          onChange={handleInputChange}
        />

        <Number
          style={inputItemStyle}
          valueKey="line-width"
          value={lineWidth}
          label="Line Width"
          step={0.1}
          min={0.1}
          max={30}
          onChange={handleInputChange}
        />

        <Number
          style={inputItemStyle}
          valueKey="line-count"
          value={lineCount}
          label="Line Count"
          step={1}
          min={1}
          max={1000}
          onChange={handleInputChange}
        />
        <Number
          style={inputItemStyle}
          valueKey="line-space"
          value={lineSpace}
          label="Line Space"
          step={0.1}
          min={0.1}
          max={50}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
}

export default Settings;
