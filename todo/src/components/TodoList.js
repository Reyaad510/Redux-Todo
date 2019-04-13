import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleTodo } from '../actions';




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

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    }

    render() {
        return (
            <>
            <div className='todo'>
                {this.props.todos.map((todo, index) => (
                     
                    <h4 onClick={e => this.toggleTodo(e, index)} key={index}>
                    {todo.todo}
                    {todo.completed && <i className="fas fa-dragon" />}
                    </h4>
                ))}
            </div>
           
            <input 
            type='text'
            name='newTodo'
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder='Add A New Todo Here!'
            />
            <div>
            <button onClick={this.addTodo}>Add Todo</button>
            </div>
          </>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { addNewTodo, toggleTodo })(TodoList)