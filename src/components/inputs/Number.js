import React from 'react'

import './Number.scss'

export function Number(props) {
  const {
    valueKey, id, name, value, label, onChange, style,
    step, min, max
   } = props


  function handleValueChange(e) {
    const newValue = e.target.value;

    onChange(id ? id : valueKey, newValue)
  }

  return (
    <div className="input-container" style={style}>
      <input 
        type="number"
        id={id ? id : valueKey}
        name={name ? name : valueKey}
        value={value}
        onChange={handleValueChange}
        step={step}
        min={min}
        max={max}
       />
       <label className="ml-2" htmlFor={name}>{label}</label>
    </div>
  );
}

export default Number;


