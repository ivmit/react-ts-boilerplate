import * as React from 'react';

import { Hello } from './components/Hello';
export default class App extends React.Component {
  render() {
    return (<div>
        <h1>Andreea</h1>
        <Hello compiler="Typescript" framework="React"></Hello>
    </div>)
  }
}