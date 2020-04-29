import React from 'react'

import './PrintPage.scss'

export function PrintPage(props) {
  const { children } = props

  return (
    <section className="PrintPage print-area-container">
      <div className="print-area">
        {children}
      </div>
    </section>
  );
}

export default PrintPage;
