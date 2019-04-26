import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <Menu />
        </header>
        <main-cotent>
          <Routes />
        </main-cotent>
      </Router>
    );
  }
}

export default App;