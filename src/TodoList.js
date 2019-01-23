import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {addTodo, removeTodo, updateTodo} from "./actionCreator";
import TodoForm from './TodoForm'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(val){
        this.props.addTodo(val);
    }

    handleDelete(id) {
        this.props.removeTodo(id);
    }

    handleUpdate(id, completed){
        this.props.updateTodo(id, !completed)
    }

    render() {

        const todos = this.props.todos.map((todo, index) => (
            <Todo
                key={index}
                todo={todo}
                onDelete={this.handleDelete.bind(this, todo.id)}
                onUpdate={ this.handleUpdate.bind(this, todo.id, todo.completed)}
            />
        ))

        return (
            <div>
                <Route exact path='/todos' render={() => (<ul className="list-group">{todos}</ul>)}/>
                <Route path ='/todos/new' render={props => (
                    <TodoForm {...props} handleSubmit={this.handleSubmit}/>
                )}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo, removeTodo, updateTodo})(TodoList);