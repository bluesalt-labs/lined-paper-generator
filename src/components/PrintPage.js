import React from 'react'

import './PrintPage.scss'

export function PrintPage(props) {
  const { children } = props

  return (
    <section className="PrintPage print-area-container">
      <div class="print-area">
        {children}
      </div>
    </section>
  );
}

export default PrintPage;
