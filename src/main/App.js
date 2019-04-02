import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

import Routes from './Routes';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <Menu />
        </header>
        <main-cotent>
          <Jumbotron>
            <Routes />
          </Jumbotron>
          <Button bsStyle="primary">Aprenda mais!</Button>
        </main-cotent>
      </Router>
    );
  }
}

export default App;