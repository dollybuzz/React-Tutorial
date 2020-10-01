/* Assignment 1
Create TWO new components: UserInput and UserOutput
UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)
Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (=> the username) and pass the username to the UserOutput component
Add a method to manipulate the state (=> an event-handler method)
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/


import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        item: "Tundra",
        set: [
            { number: 1, user: 'Tundra' },
            { number: 2, user: 'Dalia'},
            { number: 3, user: 'Rosie' }
        ]
    };

    userInputHandler = (event) => {
        this.setState({
            set: [
                { number: 1, user: event.target.value },
                { number: 2, user: 'Dalia' },
                { number: 3, user: 'Rosie' }
            ]
        });
    }

    changeSetHandler = (newValue, newUser) => {
        this.setState({
            set: [
                { number: 2, user: 'Tundra' },
                { number: 4, user: 'Dolly'},
                { number: newValue, user: newUser }
                
            ]
        })
    }
    
    render() {

        const style = {
            backgroundColor: 'plum'
        };

        return (
            <div className="App"
                style={style}>
                <UserInput
                    username={this.state.set[0].user}
                    input={this.userInputHandler} />
                <UserOutput
                    value={this.state.set[0].number}
                    username={this.state.set[0].user} />                    
                <UserOutput
                    value={this.state.set[1].number}
                    username={this.state.set[1].user} />
                <UserOutput
                    value={this.state.set[2].number}
                    username={this.state.set[2].user}
                    boop={this.changeSetHandler.bind(this, 6, 'Rosie Posie')}/>
            </div>
        );
    }; 
}

export default App;
