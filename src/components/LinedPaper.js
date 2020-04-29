import React from 'react'

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const LineItem = (props) => {
  const { width, space, color } = props
  const lineItemStyle = {
    display: 'block',
    height: `${space}px`,
    borderColor: color,
    borderBottomWidth: `${width}px`,
    borderBottomStyle: 'solid'
  }

  return <div style={lineItemStyle} />
}

export function LinedPaper(props) {
  const { lineCount, width, space, color } = props

  const lineNumbers = range(1, lineCount)
  return (
    <section className="LinedPaper">
      {lineNumbers.map(i => (
        <LineItem 
          key={`line-${i}`}
          width={width}
          space={space}
          color={color}
        />
      ))}
      
    </section>
  );
}

export default LinedPaper;


