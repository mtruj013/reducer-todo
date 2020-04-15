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

    const clearTodo = e => {
        e.preventDefault();
        dispatch({ type: "CLEAR_TODO" })
    }


    return (
        <div>
            <h1>Todos:</h1>
            <ul>
                {state.todos.map((todo) => (
                    <li
                        onClick={() =>
                            dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                        }
                        className={todo.completed ? "completed" : ""}
                    >
                        {todo.item}{" "}
                    </li>
                ))}
            </ul>
            <form>
                <input
                    type="text"
                    name="newTodo"
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button onClick={(event) => { submitTodo(event) }}>Add</button>
                {console.log("from form", state)}
                <button onClick={clearTodo}>Clear</button>
            </form>
        </div>

    )
}

export default TodoForm;