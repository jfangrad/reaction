import * as React from 'react';
import './App.css';
import DotsGame from './dots/index';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DotsGame />
      </div>
    );
  }
}

export default App;
