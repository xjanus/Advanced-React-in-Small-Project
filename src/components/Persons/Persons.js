import React, {Component} from 'react';

import Person from './Person/Person'

//props.persons is - this.state.persons - array
//props.clicked is - this.deletePersonHandler - function reference
//props.changed is - this.nameChangeHandler - function reference

class Persons extends Component{

  //************ COMPONENT CREATION LIFECYCLE**********/
    static getDerivedStateFromProps(props, state){
      console.log('[Persons.js] getDerivedStateFromProps', props);
      return state;
    }
  //*****************************************************/
  
  render(){
  
  //************ COMPONENT CREATION LIFECYCLE**********/
    console.log('[Persons.js] rendering...');
  //*****************************************************/
  
  return this.props.persons.map((person, index) => {
    return (
        <Person 
          click = {() => this.props.clicked(index)}
          name  = {person.name} 
          age   = {person.age}
          key = {person.id}
          changed = {(event) => this.props.changed(event, person.id)} />
    );

  });

  }
} 

      export default Persons;