import React, { useState, useReducer } from 'react'
import { reducer, initialState } from '../reducers/reducer'



const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState();

    const handleChanges = e => {
        setNewTodo(e.target.value)
    }

    const submitTodo = e => {
        e.preventDefault();
        console.log("hello")
        dispatch({ type: "UPDATE_TODO", payload: newTodo })
    }


    return (
        <div>
            <h1>Todos:</h1>
            {state.todos.map(todo => {
                console.log("from todoform", state.todos)
                return(
                    <div 
                        key={todo.id} 
                        className={`todo${todo.completed ? "completed" : ""}`}

                    >
                        <p>{todo.item}</p>
                    </div>
                )
            })}
            <form>
                <input
                    type="text"
                    name="newTodo"
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button onClick={(event) => { submitTodo(event) }}>Add</button>
                {console.log("from form", state)}
            </form>
        </div>

    )
}

export default TodoForm;