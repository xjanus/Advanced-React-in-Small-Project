import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass'
import classes from './Person.css';

class Person extends Component {

    render(){

    //************ COMPONENT CREATION LIFECYCLE**********/
        console.log('[Person.js] rendering...');
    //*****************************************************/

        return (
            <withClass>
                
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

            </withClass>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);