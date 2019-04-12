import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => (
                    <h4 key={index}>
                    {todo.todo}
                    </h4>
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.todoReducer.todos
})

export default connect(mapStateToProps, {})(TodoList)