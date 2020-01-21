import React from 'react';
import "./App.css"

function Todos(props) {
    return(
        <div >
            {props.state.items.map(item => {
                return(
                    <div onClick={() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: item.id})} className={item.completed ? 'completed' : ''} key={item.id}>{item.item}</div>
                )
            })}
        </div>
    )
}

export default Todos;