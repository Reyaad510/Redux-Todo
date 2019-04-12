import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    render() {
        return (
            <div>
                <h1> I am todos </h1>
            </div>
        );
    }
}

export default connect(null, {})(TodoList)