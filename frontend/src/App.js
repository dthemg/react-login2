import React from 'react';
import './App.css';
import SignIn from './components/signInComponent';
import SignUp from './components/signUpComponent';


// TODO: Check auhtentication
function isAuthenticated() {
  console.log("Checking authentication...");
    fetch("http://localhost:9000/isLoggedIn", {method: 'GET'})
      .then(res => res.json())
      .then(res => this.setState({ isLoggedIn: res}))    
}

function App() {
  return (
      <div className="App">
          { SignIn() }
          { SignUp() }
      </div>
  );
}


export default App;
