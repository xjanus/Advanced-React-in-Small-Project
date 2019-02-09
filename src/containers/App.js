import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary'
import AuthContext from '../context/auth-context'

// this refers to App class. this and props are used in class based components.

class App extends Component {
  // state can only be accessed in class-based components!

  //************ COMPONENT CREATION LIFECYCLE **********/
      constructor(props){
        super(props);
        console.log('[App.js] constructor');
      }
  //*****************************************************/
  // ******************* STATE *****************************

  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 28},
      {id: 'vasdf1', name: 'Manu', age: 29},
      {id: 'unique', name: 'Stephanie', age: 26}
    ],
    otherState: 'some random value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  //************ COMPONENT CREATION LIFECYCLE**********/
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  //*****************************************************/
  // ******************* FUNCTIONS *********************************
  nameChangeHandler = (event, id) => {
            const personIndex = this.state.persons.findIndex(p => {
              return p.id === id;
            });

            //const person = Object.assign({}, this.state.persons[personIndex]);

            const person = {
              ...this.state.persons[personIndex]
            };

            person.name = event.target.value;

            const persons = [...this.state.persons];
            persons[personIndex] = person;

            //Best practice for states that depends on the previous or old states like counter
            this.setState((prevState, props) => {
              return {
                persons: persons,
              changeCounter: prevState.changeCounter + 1
            };
          });
    };

  deletePersonHandler = (personIndexValue) => {
    //const persons = this.state.persons.slice(); for new array
    const persons = [...this.state.persons];
    persons.splice(personIndexValue, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
      );
  }

  loginHandler =() =>{
    this.setState({authenticated: true});
  }

  // *************** RENDER ***********************************
  render() {
    // Needs to be implemented in class-based components! Needs to return some JSX!

    //************ COMPONENT CREATION LIFECYCLE**********/
     console.log('[App.js] render');
    //*****************************************************/

    let persons = null;    

    if(this.state.showPersons) {  
      persons = (
          <div>
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}
              isAuthenticated={this.state.authenticated} />
          </div>
              );
      }

  // ***************** RETURN *************************************

    return (
      <Aux>

          <button onClick={() => {
            this.setState({showCockpit: false})
            }}
            >
            Remove Cockpit
          </button>

          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
            }}
            >
        
              {this.state.showCockpit ? 
                ( <Cockpit 
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler}
                />)
                  : null} 

              {persons}

          </AuthContext.Provider>
        
        </Aux>
    );
    // ***************** RETURN ENDS *******************************
    // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hi! I\'m a React App!!!'));
  }
  // ***************** RENDER ENDS ************************************

  //************ COMPONENT CREATION LIFECYCLE**********/
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  //*****************************************************/

//************ COMPONENT UPDATE LIFECYCLE FOR STATE CHANGES**********/

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
  //using undefined or false will not allow Persons component to be rendered.
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}
//*****************************************************/
}

export default withClass(App, classes.App);
