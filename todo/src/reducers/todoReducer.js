


const initialState = {
    todos: [
        {
            todo: 'Walk the dog.',
            completed: false
        }
    ]
}


export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}