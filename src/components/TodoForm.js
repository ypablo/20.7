import React from 'react';
import style from '../containers/App.css';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clearInput: "" 
        }
    }

    updateInput(event) {
        this.setState({[event.target.name]:event.target.value});
      }

    addItem(event) {
        event.preventDefault();
        let el = document.querySelector('input').value;  
        this.props.addTodo(el);
        this.setState({clearInput: ""});
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text" placeholder="Add a task" name="clearInput" value={this.state.clearInput} onChange={this.updateInput.bind(this)}></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }

};
export default TodoForm;