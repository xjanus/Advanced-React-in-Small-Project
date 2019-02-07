import React from 'react';

import Person from './Person/Person'

//props.persons is - this.state.persons - array
//props.clicked is - this.deletePersonHandler - function reference
//props.changed is - this.nameChangeHandler - function reference

const persons = (props) => { 
  
  //************ COMPONENT CREATION LIFECYCLE**********/
  console.log('[Persons.js] rendering...');
  //*****************************************************/
  
  return props.persons.map((person, index) => {
  return (
  <Person 
    click = {() => props.clicked(index)}
    name  = {person.name} 
    age   = {person.age}
    key = {person.id}
    changed = {(event) => props.changed(event, person.id)} />
  );
});
}; 

      export default persons;