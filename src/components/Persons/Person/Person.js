import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass'
import classes from './Person.css';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

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
                    ref={this.inputElementRef}
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

componentDidMount(){
    this.inputElementRef.current.focus();
}

export default withClass(Person, classes.Person);