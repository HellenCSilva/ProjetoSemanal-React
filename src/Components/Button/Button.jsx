import React from 'react'
import S from './Button.module.css'

function Button(props) {
  return (
    <button style={{backgroundColor: `${props.cor}`}}>{props.texto}</button>

    
  )
}

export default Button