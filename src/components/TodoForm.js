import React from 'react';
import style from '../containers/App.css';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    addItem(event) {
        event.preventDefault();
        const el = document.querySelector('input').value;
        this.props.addTodo(el);
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text" placeholder="Add a task"></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }

};
export default TodoForm;