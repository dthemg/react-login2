import React from 'react';
import './App.css';
import SignIn from './components/signInComponent';
import SignUp from './components/signUpComponent'

function App() {
  return (
    <div className="App">
      { SignIn() }
      { SignUp() }
    </div>
  );
}

export default App;
