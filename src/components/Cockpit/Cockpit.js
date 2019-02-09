import React, {useEffect} from 'react';

import classes from './Cockpit.css';

//props.showPersons is this.state.showPersons 
//props.persons is this.state.persons

const cockpit = (props) => {

  //useEffect is a React Hook that takes a default function that 
  //will run for every render cycle ofthe Cockpit.js
  //hence, useEffect basically functions as componentDidMount 
  //and componentDidUpdate together

//we only want to run useEffect here when our persons changed
//for that we add a second argument [props.persons].
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //HTTP request...
    
    setTimeout(() => {
      console.log('Saved data to cloud!');
    }, 1000);
  }, [props.persons]);

  //you can use useEffect more if you want different effects on different 
  //data change

  //useEffect executes only when the component renders the first time
  //to do that pass an empty array.
  //This tell React, this useEffect method has no dependencies and it 
  //should re-run whenever one of the dependencies changes.
  //Now, since we have no dependencies, then, they can never change.
  //and therefore useEffect can never re-run. It will therefore only run for
  //the first time. That is the default. But it will never run again.
  useEffect(() => {
    console.log('[Cockpit.js], useEffect');    
    setTimeout(() => {
      console.log('Saved data to cloud and run only the first time!');
    }, 1000);
  }, []);

  //useEffect for clean-up like componentWillUnmount()}{}
  //we return an anonymous function which will run BEFORE the main 
  //useEffect function runs, but AFTER the first render cycle!
  useEffect(() => {
    setTimeout(() => {
      console.log('[Cockpit.js], for clean-up');
    }, 1000);
    return () => {
      console.log("[Cockpit.js], clean-up work using useEffect()");
    }
  }, []);

  //the below useEffect is useful if you want to cancel whenever the component
  //is re-rendered or updated
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log("[Cockpit.js], clean-up work using 2nd useEffect()");
    };
  });

    const assignedClasses = [];
    let btnClass = "";

    if(props.showPersons) {
        btnClass = classes.Red;
    }
        
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
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

export default React.memo(cockpit);
         
         
         
         