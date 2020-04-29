import React, { createContext, useContext, useReducer } from 'react'

// Reducer action type constants
export const SET_LINE_COUNT     = 'setLineCount'
export const SET_LINE_WIDTH     = 'setLineWidth'
export const SET_LINE_SPACE     = 'setLineSpace'
export const SET_LINE_COLOR     = 'setLineColor'
export const SET_MARGIN_X       = 'setMarginX'
export const SET_MARGIN_Y       = 'setMarginY'
export const SET_MARGIN_TOP     = 'setMarginTop'
export const SET_MARGIN_RIGHT   = 'setMarginRight'
export const SET_MARGIN_BOTTOM  = 'setMarginBottom'
export const SET_MARGIN_LEFT    = 'setMarginLeft'

// Initial State
export const appInitialState = {
  lineCount: 30,
  lineWidth: 1,
  lineSpace: 0.3,
  lineColor: '#808080',
  marginTop: 1,
  marginRight: 1,
  marginBottom: 1,
  marginLeft: 1,
}

// Reducer
export const appReducer = (state, action) => {
  switch(action.type) {
    case SET_LINE_COUNT:    return { ...state, lineCount: action.value }
    case SET_LINE_WIDTH:    return { ...state, lineWidth: action.value }
    case SET_LINE_SPACE:    return { ...state, lineSpace: action.value }
    case SET_LINE_COLOR:    return { ...state, lineColor: action.value }
    case SET_LINE_COLOR:    return { ...state, lineColor: action.value }
    case SET_MARGIN_X:      return { ...state, marginLeft: action.value, marginRight: action.value }
    case SET_MARGIN_Y:      return { ...state, marginTop: action.value, marginBottom: action.value }
    case SET_MARGIN_TOP:    return { ...state, marginTop: action.value }
    case SET_MARGIN_RIGHT:  return { ...state, marginRight: action.value }
    case SET_MARGIN_BOTTOM: return { ...state, marginBottom: action.value }
    case SET_MARGIN_LEFT:   return { ...state, marginLeft: action.value }
    default: return state
  }
}

// Context
const AppContext = createContext()

// Context Provider
export const AppProvider = ({reducer, initialState, children}) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
)

// State Value
export const useAppStateValue = () => useContext(AppContext)

export default AppContext
