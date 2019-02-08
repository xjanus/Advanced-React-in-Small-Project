import React, {useEffect} from 'react';

import classes from './Cockpit.css'

//props.showPersons is this.state.showPersons 
//props.persons is this.state.persons

const cockpit = (props) => {

  //useEffect is a React Hook that takes a default function that 
  //will run for every render cycle ofthe Cockpit.js
  //hence, useEffect basically functions as componentDidMount 
  //and componentDidUpdate together


  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //HTTP request...
    
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
  });

    const assignedClasses = [];
    let btnClass = "";

    if(props.showPersons) {
        btnClass = classes.Red;
    }
        
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            
            <h1> Hi! I'm a React App for {props.title}</h1>
            
            <p className={assignedClasses.join(' ')}>
            This is really working!!!
            </p>
          
            <button 
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>

          </div>
    );
}

export default cockpit;
         
         
         
         