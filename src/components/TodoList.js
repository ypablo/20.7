import React from 'react';
import style from '../containers/App.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <div className={style.Todo}>
            <ul>{this.props.data.map(item => (
                <li key={item.id} onClick={()=> this.props.remove(item.id)}>
                  {item.text}                
                </li>
              ))}</ul>
            </div>
        );
    }

};
export default TodoList;