export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

export function addTodo(todo){
    return {
        type: ADD_TODO,
        todo
    }
}

export function removeTodo(id){
    return {
        type: REMOVE_TODO,
        id
    }
}

export function updateTodo(id, completed){
    return {
        type: UPDATE_TODO,
        id,
        completed
    }
}