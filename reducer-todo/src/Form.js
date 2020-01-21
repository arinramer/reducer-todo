import React, { useState } from 'react';

function Form(props) {
    const [inputText, setInputText] = useState('');
    const handleChanges = e => {
        e.preventDefault();
        setInputText(e.target.value);
    }
    const addTodo = e => {
        e.preventDefault();
        props.dispatch({ type: "ADD_TODO", payload: inputText})
        setInputText('');
    }
    const clearCompleted = e => {
        e.preventDefault();
        props.dispatch({ type: "CLEAR_COMPLETED" })
    }
    return(
        <form>
            <input type="text" name="inputText" value={inputText} placeholder="Add Todo" onChange={handleChanges}></input>
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default Form;