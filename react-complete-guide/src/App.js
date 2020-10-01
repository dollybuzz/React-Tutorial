import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//class based component
class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'click the button'
    };

    switchNameHandler = (newName) => {
        //console.log("Was clicked!");
        //Don't do this: this.state.persons[0].name = "Maximilian";
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ],
            otherState: 'button was clicked'
            });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ],
            otherState: 'button was clicked'
        });
    }

    //the first passing reference method between components for onClick is not very efficient
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>I'm a React App</h1>
                <p>This is really working!</p>
                <h4>{this.state.otherState}</h4>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangedHandler}>My hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
                <Person
                    name="Lauren"
                    age="25">Hobbies: Dancing</Person>
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a React App!!!'));
    };
}

export default App;

//React hook implementation uses functional based components vs class based components
/*
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


 const app = props => {
    
    const [personsState, setPersonsState] = useState ({                           //const stateArr = useState ({
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Steph', age: 26 }
        ],
        otherState: 'click the button'
    });

    //functions can be inside functions 

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephany', age: 27 }
            ] //,
            //otherState: personsState.otherState       //this differs from a class based component
            });                                         //in functional based components, any updated state is not merged 
    }                                                   //with old state, it is replaced; therefore, old state data must be
                                                        //added manually or call the useState method multiple times
    const [otherState, setOtherState] = userState('some other value');

    console.log(personsState, otherState);

     return (
       <div className="App">
             <h1>I'm a React App</h1>
             <p>This is really working!</p>
             <h4>{this.state.otherState}</h4>
             <button onClick={switchNameHandler}>Switch Name</button>
             <Person name={personsState.persons[0].name} age={personsState.state.persons[0].age} />
             <Person name={personsState.state.persons[1].name} age={personsState.state.persons[1].age}  >My hobbies: Racing</Person>
             <Person name={personsState.state.persons[2].name} age={personsState.state.persons[2].age} />
             <Person name="Stephanie" age="25">Hobbies: Dancing</Person>
       </div>
      );
}

export default app;

 * */