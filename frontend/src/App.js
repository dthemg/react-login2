import React from 'react';
import './App.css';
import SignIn from './components/signInComponent';
import SignUp from './components/signUpComponent';


// TODO Ask backend if user is authenticated?


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  
  isAuthenticated() {
    console.log("Checking authentication...");
    fetch("http://localhost:9000/isLoggedIn", {method: 'GET'})
      .then(res => res.json())
      .then(res => this.setState({ isLoggedIn: res}))    
  }

  render() {
    return (
      /* 
      SO: What I do here is breaking the rules of hooks since this is from within
      a class component. This needs to be solved next!
      */

      <div className="App">
          { SignIn() }
          { SignUp() }
      </div>
    );
  }
}

export default App;
