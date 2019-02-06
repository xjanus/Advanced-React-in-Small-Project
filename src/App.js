import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  // state can only be accessed in class-based components!

  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: '28'},
      {id: 'vasdf1', name: 'Manu', age: '29'},
      {id: 'unique', name: 'Stephanie', age: '26'}
    ],
    otherState: 'some random value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {//this refers to class App because of arrow function
  //   //DONT TO THIS: this.state.persons[0].name = 'Maximillian';
  //   //persons object is merged and updated/replaced to the following persons object
  //   this.setState( {
  //     persons: [
  //     {name: newName, age: '28'},
  //     {name: 'Manu', age: '29'},
  //     {name: 'Stephanie', age: '28'}
  //   ]
  // })
  // };


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personIndex]);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndexValue) => {
    //const persons = this.state.persons.slice(); for new array
    const persons = [...this.state.persons];
    persons.splice(personIndexValue, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
      );
  }

  render() {
    // Needs to be implemented in class-based components! Needs to return some JSX!
    
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'Lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      
      persons = (
      <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click = {this.deletePersonHandler.bind(this, index)}
                name  = {person.name} 
                age   = {person.age}
                key = {person.id}
                changed = {(event) => this.nameChangeHandler(event, person.id)} />
            })}
      </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    
    return (
      <StyleRoot>
        <div className="App">
        
          <h1> Hi! I'm a React App.</h1>
          <p className={classes.join(' ')}>This is really working!!!</p>
          
          <button 
            style = {style}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>

          {persons}
        
        </div>
      </StyleRoot>
    );
    // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hi! I\'m a React App!!!'));
  }
}

export default Radium(App);