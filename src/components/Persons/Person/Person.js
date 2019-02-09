import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass'
import classes from './Person.css';
import AuthContext from '../../../context/auth-context'
import { isContext } from 'vm';

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

                <AuthContext.Consumer>
                    {(context) => 
                        context.authenticated ? <p> Authenticated </p> : <p>Please Log In</p>
                    }
                </AuthContext.Consumer>
                
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

    componentDidMount() {
        console.log("[Person.js], componentDidMount");
        this.inputElementRef.current.focus();
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);