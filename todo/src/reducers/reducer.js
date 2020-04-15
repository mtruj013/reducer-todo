export const initialState =
{
    todos: [
        {
            item: 'learn abnout reducers',
            completed: false,
            id: 3892957559
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TODO':
            console.log("dispatched")
            return {
                ...state,
                todos: [...state.todos,
                    {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            };
        case 'TOGGLE_TODO':
            console.log("toggled")
            return {
              ...state,
              todos: state.todos.map(todo => {
                  return todo.id === action.payload ? {...todo, completed : !todo.completed} : todo;
              })
                
            }
        case 'CLEAR_TODO':
            return{
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
}


