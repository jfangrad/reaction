import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Pages } from 'src/common/constants';
import MainMenu from './MainMenu/MainMenu';
import DotsGame from 'src/dots';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router basename="reaction">
          <Route exact path={Pages.Home} component={MainMenu} />
          <Route path={Pages.Dots.Home} component={DotsGame} />
          <Redirect from="/" to={Pages.Home} />
        </Router>
      </div>
    );
  }
}

export default App;
