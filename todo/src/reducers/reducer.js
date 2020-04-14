export const initialState =
{
    todos: [
        {
            item: 'learn abnout reducers',
            completed: false,
            id: Date.now()
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
            }
        default:
            return state;
    }
}


