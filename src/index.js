import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function formateName(user){
//     return user.firstname + ' ' + user.lastname;
// }
// const user = {
//     firstname : 'Haa',
//     lastname : 'per'
// }
// const element = (<h1>hello,{ formateName(user)}</h1>)
// const element = React.createElement(
//     'h2',
//     {className:''},
//     'hello'
//   )
// ReactDOM.render(element,document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
