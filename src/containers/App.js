import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// this refers to App class. this and props are used in class based components.

class App extends Component {
  // state can only be accessed in class-based components!

  //************ COMPONENT CREATION LIFECYCLE**********/
      constructor(props){
        super(props);
        console.log('[App.js] constructor');
      }
  //*****************************************************/
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

  //************ COMPONENT CREATION LIFECYCLE**********/
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  //*****************************************************/
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

     //************ COMPONENT CREATION LIFECYCLE**********/
     console.log('[App.js] render');
    //*****************************************************/

    let persons = null;    

    if(this.state.showPersons) {  
      persons = (
          <div>
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler} />
          </div>
              );
      }

  // ***************** RETURN *************************************

    return (
        <div className={classes.App}>
        
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />

          {persons}
        
        </div>
    );
    // ***************** RETURN ENDS *******************************
    // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hi! I\'m a React App!!!'));
  }
  // ***************** RENDER ENDS ************************************

  //************ COMPONENT CREATION LIFECYCLE**********/
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  //*****************************************************/
}

export default App;
