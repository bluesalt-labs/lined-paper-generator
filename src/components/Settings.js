import React from 'react'

import './Settings.scss'

import {
  useAppStateValue,
    SET_LINE_COUNT,
    SET_LINE_WIDTH,
    SET_LINE_SPACE,
    SET_LINE_COLOR,
    SET_MARGIN_X,
    SET_MARGIN_Y,
    SET_MARGIN_TOP,
    SET_MARGIN_RIGHT,
    SET_MARGIN_BOTTOM,
    SET_MARGIN_LEFT,
} from 'contexts'

import {
  Color,
  Text,
  Number
} from 'components'

export function Settings(props) {
  const [{
    lineCount, lineWidth, lineSpace, lineColor, 
    marginTop, marginRight, marginBottom, marginLeft,
  }, appDispatch] = useAppStateValue()

  function handleInputChange(key, value) {
    //console.debug(key)
    //console.debug(value)

    switch(key) {
      case 'line-color':    appDispatch({ type: SET_LINE_COLOR, value: value }); break;
      case 'line-width':    appDispatch({ type: SET_LINE_WIDTH, value: value }); break;
      case 'line-space':    appDispatch({ type: SET_LINE_SPACE, value: value }); break;
      case 'line-count':    appDispatch({ type: SET_LINE_COUNT, value: value }); break;
      case 'margin-x':      appDispatch({ type: SET_MARGIN_X, value: value }); break;
      case 'margin-y':      appDispatch({ type: SET_MARGIN_Y, value: value }); break;
      case 'margin-top':    appDispatch({ type: SET_MARGIN_TOP, value: value }); break;
      case 'margin-right':  appDispatch({ type: SET_MARGIN_RIGHT, value: value }); break;
      case 'margin-bottom': appDispatch({ type: SET_MARGIN_BOTTOM, value: value }); break;
      case 'margin-left':   appDispatch({ type: SET_MARGIN_LEFT, value: value }); break;
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

  //const onMarginYClick = () => { appDispatch({ type: SET_MARGIN_TOP, value: marginTop }); }
  //const onMarginXClick = () => { appDispatch({ type: SET_MARGIN_RIGHT, value: marginRight }); }

console.debug(`m-top: ${marginTop} | m-right: ${marginRight} | m-bottom: ${marginBottom} | m-left: ${marginLeft}`)

  return (
    <section className="Settings page-section">
    {/*
      <div className="page-section-content" style={inputContainerStyle}>

        <Number
          style={inputItemStyle}
          valueKey="margin-x"
          value={marginRight}
          disabled={marginRight !== marginLeft}
          label="Margin X"
          step={0.1}
          min={0}
          max={5}
          onChange={handleInputChange}
        />

        <Number
          style={inputItemStyle}
          valueKey="margin-y"
          value={marginTop}
          disabled={marginTop !== marginBottom}
          label="margin Y"
          step={0.1}
          min={0}
          max={5}
          onChange={handleInputChange}
        />
      </div>
    */}
      <div className="page-section-content" style={inputContainerStyle}>

        <Number
          style={inputItemStyle}
          valueKey="margin-top"
          value={marginTop}
          label="Margin Top"
          step={0.1}
          min={0}
          max={5}
          onChange={handleInputChange}
        />

        <Number
          style={inputItemStyle}
          valueKey="margin-right"
          value={marginRight}
          label="margin Right"
          step={0.1}
          min={0}
          max={5}
          onChange={handleInputChange}
        />

        <Number
          style={inputItemStyle}
          valueKey="margin-bottom"
          value={marginBottom}
          label="Margin Bottom"
          step={0.1}
          min={0}
          max={5}
          onChange={handleInputChange}
        />

        <Number
          style={inputItemStyle}
          valueKey="margin-left"
          value={marginLeft}
          label="margin Left"
          step={0.1}
          min={0}
          max={5}
          onChange={handleInputChange}
        />

      </div>

      <hr />

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
          step={0.01}
          min={0.01}
          max={50}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
}

export default Settings;
