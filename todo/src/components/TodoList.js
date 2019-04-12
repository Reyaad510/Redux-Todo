import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions';




class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    }

    render() {
        return (
            <>
            <div>
                {this.props.todos.map((todo, index) => (
                    <h4 key={index}>
                    {todo.todo}
                    </h4>
                ))}
            </div>
           
            <input 
            type='text'
            name='newTodo'
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder='Add A New ToDo'
            />
            <button onClick={this.addTodo}>Add ToDo</button>
          </>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { addNewTodo })(TodoList)