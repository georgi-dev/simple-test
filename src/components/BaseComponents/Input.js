import React from 'react'

const Input = (props) => {
   return (
       <input style={{padding:'.5rem'}}
              type={props.type}
              onChange={props.change}
              value={props.inputValue}
       />
   )
}

export default Input