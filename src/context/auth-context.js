import React from 'react';

//createContext doesnt have to be an object. It can be an array, 
//string, number as a context value
const authContext = React.createContext({
    authenticated: false, 
    login:() => {}
});

export default authContext;