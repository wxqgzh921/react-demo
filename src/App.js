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

function Tick(){
  const time = new Date().toLocaleTimeString()
  return time
}

class App extends React.Component {
  state = {num: 1}

  componentDidMount(){
    // setInterval(()=>{
    // },1000)
  }

  handleClick = () =>{
    // this.setState({num: this.state.num + 1})
    // console.log(this.state.num)

    // setTimeout(() => {
    //   console.log(this.state.num,'setTimeout')
    // }, 2000);





    // this.setState({num: this.state.num + 1},()=>{
    //   console.log(this.state.num)
    // })



    this.setState((state)=>{
      console.log(state,'111')
      return {num: this.state.num + 1}
    })
  }

  render(){
    console.log('render')
    return (
      <div className="App">
        <button onClick={this.handleClick}>增加</button>
        <header className="App-header">
          {/* <h1>hello,{formateName(user)}</h1> */}
          {a(user)}
          {this.state.num}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Tick/>
        </header>
      </div>
    );
  }
}
export default App;
