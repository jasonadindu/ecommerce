import React from 'react'

function Buttons({ btnClassName, content }) {
  return <button className={ ` btn ${btnClassName}`}>{content}</button>
  
}

export default Buttons