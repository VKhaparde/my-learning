import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/calculator';
import ShowList from './components/list';
import ExampleForm from './components/form';
import App2 from './components/app2';
import App1 from './components/app1';
import App from './components/app';
// const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  // <ShowList numbers={numbers}/>,
  // <ExampleForm/>,
  <App />,
  // <App2 />,
  document.querySelector('#root')
);
