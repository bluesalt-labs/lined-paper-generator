import React from 'react'

import './PrintPage.scss'

// Look into using a library like this: https://github.com/MrRio/jsPDF

import {
  useAppStateValue,
} from 'contexts'

export function PrintPage(props) {
  const [{ marginTop, marginRight, marginBottom, marginLeft }] = useAppStateValue()

  const { children } = props

  const printAreaStyle = {
    borderTopWidth: `${marginTop}in`,
    borderRightWidth: `${marginRight}in`,
    borderBottomWidth: `${marginBottom}in`,
    borderLeftWidth: `${marginLeft}in`,
  }

  return (
    <section className="PrintPage print-area-container">
      <div className="print-area" style={printAreaStyle}>
        {children}
      </div>
    </section>
  );
}

export default PrintPage;
