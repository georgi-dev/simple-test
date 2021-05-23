import React from 'react'

const TodoItem = (props) => {
    console.log(props)
    let div = {
        width:'60%',
        background:'#fff',
        boxShadow:'0 2px 5px #374684',
        textAlign:'left',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        // marginTop:'1rem',
        padding:'1rem',
        margin: '2rem auto'
    };
    div.background = props.completed ? '#00000012' : ''
    let removeBtn = {
        marginRight:'1rem',
        marginLeft:'1rem',
        cursor:'pointer',
        color:'red'
    };
    return (
        <div style={div}>
            <h1 style={{textDecoration: props.completed ? 'line-through' : ""}}>{props.title}</h1>
            <div><input type='checkbox' onChange={props.onComplete} checked={props.completed}/>
                <span onClick={props.removeBtnClick} style={removeBtn}>X</span></div>

        </div>
    )
}
export default TodoItem