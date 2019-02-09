import React, {Component} from 'react';

import Person from './Person/Person'

//props.persons is - this.state.persons - array
//props.clicked is - this.deletePersonHandler - function reference
//props.changed is - this.nameChangeHandler - function reference

class Persons extends Component{

//************ COMPONENT UPDATE LIFECYCLE**********/
    
    // static getDerivedStateFromProps(props, state){
    //   console.log('[Persons.js] getDerivedStateFromProps');
    //   return state;
    // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons){
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  //for clean up
  componentWillUnmount(){
    console.log("[Persons.js], componentWillUnmount for clean-up");
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
//************ COMPONENT UPDATE LIFECYCLE**********/
componentDidUpdate(prevProps, prevState, snapshot){
  console.log('[Persons.js] componentDidUpdate');
  console.log(snapshot, 'output from componentDidUpdate');
}
//*****************************************************/

} 

export default Persons;