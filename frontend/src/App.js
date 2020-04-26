import React, { useState } from 'react';
import './App.css';
import SignIn from './components/signInComponent';
import SignUp from './components/signUpComponent';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  fetch("http://localhost:9000/isLoggedIn", {method: 'GET'})
    .then(res => res.json())
    .then(res => setLoggedIn(res.loggedIn))
  
  console.log("User logged in: ", loggedIn);
  return loggedIn ? <AppAuthenticated/> : <AppNotAuthenticated/>
}

function AppAuthenticated() {
  return (
    <div className="App">
      <h1>Authenticated app</h1>
    </div>
  );
}

function AppNotAuthenticated() {
  return (
    <div className="App">
        < SignIn />
        < SignUp />
    </div>
  );
}

export default App;