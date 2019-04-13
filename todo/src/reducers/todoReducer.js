
import { ADD_TODO } from '../actions';
import { TOGGLE_TODO } from '../actions';
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
        case ADD_TODO:
        console.log(action); 
        const newTodo = {
            todo: action.payload,
            completed: false
        };
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                action.payload === index ? {...todo, completed: !todo.completed} : todo
                )
            }
        default:
        return state;
    }
}