import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Steph', age: 26 }
        ],
        otherState: 'click the button'
    };

    switchNameHandler = () => {
        //console.log("Was clicked!");
        //Don't do this: this.state.persons[0].name = "Maximilian";
        this.setState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephany', age: 27 }
            ],
            otherState: 'button was clicked'
            });
    }

    render() {
        return (
            <div className="App">
                <h1>I'm a React App</h1>
                <p>This is really working!</p>
                <h4>{this.state.otherState}</h4>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  >My hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                <Person name="Stephanie" age="25">Hobbies: Dancing</Person>
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!'));
    };
}

export default App;
