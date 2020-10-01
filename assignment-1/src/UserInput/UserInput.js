import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <h3>My new username: {props.username}</h3>
            <input type="text" onChange={props.input} value={props.username}/>
            <p>Testing this</p>
        </div>)
};

export default userInput;