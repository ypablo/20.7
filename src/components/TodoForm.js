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
                <form>
                    <input type="text" placeholder="What do you want to do?"></input>
                    <button>Add task</button>
                </form>
            </div>
        );
    }

};
export default TodoForm;