import React from 'react'

export const Todo = (props) => {
    return (
        <>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <button className="btn btn-danger" onClick={props.onDelete}>Delete</button>
        <hr></hr>
        </>
    )
}
