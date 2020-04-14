import React, { useState, useReducer } from 'react'
import { reducer, initialState} from "../reducers/reducer"
import TodoForm from './TodoForm';


const ParentTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [newTodo, setNewTodo] = useState({});


 

    return (
        <div>
            <h1>Todos:</h1>
            {state.todos.map(todo => {
                console.log("from parent",todo)
                return (
                   <div key={todo.id} className={`todo${todo.completed ? "completed" : ""}`}
                        //onclick assigned to dispatch
                   >
                       
                <p>{todo.item}</p>
                   </div>
                )
            })}
            <TodoForm />
        </div>
    )
}
export default ParentTodo;

