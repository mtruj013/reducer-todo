import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            todo: ''
        }
    }

    render(){
        return (
            <form>
                <input
                    type="text"
                    value={this.state.todo}
                    name="todo"
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;