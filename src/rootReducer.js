import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './actionCreator'

const initialState = {
    todos: [],
    id: 0
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            var newState = {...state}
            newState.id++;
            return {
                ...newState,
                todos: [...newState.todos, {todo: action.todo, id: newState.id, completed: false}]
            }
        case REMOVE_TODO:
            var todos = state.todos.filter(val => val.id !== action.id)
            return {...state, todos}
        case UPDATE_TODO:
            var updatedTodos = state.todos.map(todo => (
                todo.id === action.id ? {
                    ...todo,
                    completed: action.completed
                } : todo
            ));
            return {...state, todos: updatedTodos}
        default:
            return state
    }
}