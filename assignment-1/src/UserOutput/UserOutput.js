import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is paragraph number {props.value}.</p>
            <p onClick={props.boop}>My username is {props.username}!</p>
            <br />
        </div>
    )
};

export default userOutput;