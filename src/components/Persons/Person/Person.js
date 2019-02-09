import React, {Component} from 'react';
import Aux from '../../../hoc/Auxilliary'
import classes from './Person.css';

class Person extends Component {

    render(){

    //************ COMPONENT CREATION LIFECYCLE**********/
        console.log('[Person.js] rendering...');
    //*****************************************************/

        return (
            <Aux>
                
                <p onClick={this.props.click}>
                    I'm a {this.props.name}. 
                    I am {this.props.age} years old.
                </p>
                
                <p>{this.props.children}</p>
                
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
    
            </Aux>
        );
    }
}

export default Person;