import React, { createContext, useContext, useReducer } from 'react'

// Reducer action type constants
export const SET_LINE_COUNT   = 'setLineCount'
export const SET_LINE_WIDTH   = 'setLineWidth'
export const SET_LINE_SPACE   = 'setLineSpace'
export const SET_LINE_COLOR   = 'setLineColor'

// Initial State
export const appInitialState = {
  lineCount: 50,
  lineWidth: 1,
  lineSpace: 30,
  lineColor: '#000'
}

// Reducer
export const appReducer = (state, action) => {
  switch(action.type) {
    case SET_LINE_COUNT: return { ...state, lineCount: action.value }
    case SET_LINE_WIDTH: return { ...state, lineWidth: action.value }
    case SET_LINE_SPACE: return { ...state, lineSpace: action.value }
    case SET_LINE_COLOR: return { ...state, lineColor: action.value }
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
