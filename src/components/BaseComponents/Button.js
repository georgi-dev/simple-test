import React from 'react'

const button = (props) => {
    return (
        <button
            style={{padding:'.5rem', background:'#123456', color:'#fff'}}
            onClick={props.click}>Add</button>
    )
}

export default button;