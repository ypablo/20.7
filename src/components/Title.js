import React from 'react';
import style from '../containers/App.css';

class Title extends React.Component {


    render() {
        return (
            <div className={style.Title}>
                <h1>To Do List:</h1>
            </div>
        );
    }

}
export default Title;