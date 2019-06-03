import React from 'react';
import style from '../containers/App.css';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            inputValue: ""
        } 
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <form onSubmit={this.props.addItem}>
                    <input type="text" placeholder="Add a task" value={this.props.inputValue}></input>
                    <button type="submit" onClick={()=> this.props.add(item.id)}>Add</button>
                </form>
            </div>
        );
    }

};
export default TodoForm;