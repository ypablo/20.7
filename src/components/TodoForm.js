import React from 'react';
import style from '../containers/App.css';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <div className={style.Todo}>
                <form>
                    <input type="text"></input>
                    <button>Add task</button>
                </form>
            </div>
        );
    }

};
export default TodoForm;