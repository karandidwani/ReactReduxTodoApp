import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo, removeTodo} from "./actionCreator";
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoText: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({
            todoText: ""
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleDelete(id){
        this.props.removeTodo(id);
    }

    render() {

        const todos = this.props.todos.map((todo, index) => (
            <Todo
                key={index}
                todo={todo.todo}
                onDelete={this.handleDelete.bind(this, todo.id)}
            />
        ))

        return (
            <div className='container text-center'>
                <h1>React-Redux TodoList App</h1>
                <div className="jumbotron">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="todoText">Enter your todo here</label>
                        <input
                            type="text"
                            id="todoText"
                            name="todoText"
                            value={ this.state.todoText}
                            onChange={this.handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Add todo
                        </button>
                    </form>
                </div>
                <ul className="list-group">
                    {todos}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);