import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = (props) => {

    return (
        <div style={{marginTop:'2rem'}}>

            {
                props.items.length > 2
                    ?
                    <div>
                        <h1>Actions</h1>
                        <select name="" id="" onChange={props.onSelectAction} >
                            <option value=""></option>
                            <option value="complete-all">Complete all</option>
                            <option value="unselect-all">Unselect all</option>
                            <option value="remove-completed">Remove completed</option>
                            <option value="remove-all">Remove all</option>
                        </select>
                    </div>
                    : ''
            }

            {
                props.items.map((item,index) => {
                    console.log("HERE",item);
                    return <TodoItem
                        title={item.title}
                        key={index}
                        completed={item.completed}
                        onComplete={() => props.makeCompleted(index)}
                        removeBtnClick={() => props.removeBtnClick(index)}
                    />
                })
            }

        </div>
    )
}

export default TodoItems;