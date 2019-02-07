import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  // state can only be accessed in class-based components!

  // ******************* STATE *****************************

  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: '28'},
      {id: 'vasdf1', name: 'Manu', age: '29'},
      {id: 'unique', name: 'Stephanie', age: '26'}
    ],
    otherState: 'some random value',
    showPersons: false
  }

  // ******************* FUNCTIONS *********************************
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

  // *************** RENDER ***********************************
  render() {
    // Needs to be implemented in class-based components! Needs to return some JSX!

    let persons = null;
    let btnClass = "";

    if(this.state.showPersons) {  
      
      btnClass = classes.Red;
      
      persons = (
          <div>
                {this.state.persons.map((person, index) => {
                  return <Person 
                    click = {this.deletePersonHandler.bind(this, index)}
                    name  = {person.name} 
                    age   = {person.age}
                    key = {person.id}
                    changed = {(event) => this.nameChangeHandler(event, person.id)} />
                })
                }
          </div>
              );
      }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

  // ***************** RETURN *************************************

    return (
        <div className={classes.App}>
        
          <h1> Hi! I'm a React App.</h1>
          <p className={assignedClasses.join(' ')}>This is really working!!!</p>
          
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>

          {persons}
        
        </div>
    );
    // ***************** RETURN ENDS *******************************
    // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hi! I\'m a React App!!!'));
  }
  // ***************** RENDER ENDS ************************************
}

export default App;
