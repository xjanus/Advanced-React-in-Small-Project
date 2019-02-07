import React from 'react';
import classes from './Person.css';

const person = (props) => {
   
    //************ COMPONENT CREATION LIFECYCLE**********/
     console.log('[Person.js] rendering...');
    //*****************************************************/

    return(
        <div className={classes.Person}>
            
            <p onClick={props.click}>
            I'm a {props.name}. 
            I am {props.age} years old.
            </p>
            
            <p>{props.children}</p>
            
            <input type="text" onChange={props.changed} value={props.name}>
            </input>

        </div>
    );
};

export default person;