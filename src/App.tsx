import * as React from 'react';
import './App.css';
import Dots from './dots/index';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Dots />
      </div>
    );
  }
}

export default App;
