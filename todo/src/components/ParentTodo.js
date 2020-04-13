import React, { useState, useReducer } from 'react'
import { reducer, initialState} from "../reducers/reducer"


const ParentTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setTodo] = useState('');

    return (
        <div>
            <h1>Todos:</h1>
            {state.map(todo => {
                console.log(todo)
                return (
                   <div className={`todo${todo.completed ? "completed" : ""}`}
                   >
                       
                <p>{todo.item}</p>
                   </div>
                )
            })}
        </div>
    )
}
export default ParentTodo;

