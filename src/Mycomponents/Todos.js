import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="my-3">Todos List</h3>
            {props.todos.length !== 0 ? props.todos.map((todoItem)=>{
                return <Todo title={todoItem.title} key={todoItem} desc={todoItem.desc} onDelete={()=>props.onDelete(todoItem)}/>
            }) : "No todos to display"}
        </div>
    )
}
