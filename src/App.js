import React from 'react';
import './App.css';


function formateName(user){
  return user.firstname + ' ' + user.lastname;
}
const user = {
  firstname : 'Haa',
  lastname : 'per'
}

function a(user){
  if(user){
    return <h1>hello,{formateName(user)}</h1>
  }
  return <h1>hello,world</h1>
}

function tick(){
  const time = new Date().toLocaleTimeString()
  return time
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>hello,{formateName(user)}</h1> */}
        {a(user)}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {tick()}
      </header>
    </div>
  );
}
export default App;
