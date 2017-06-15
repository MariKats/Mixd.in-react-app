import React, { Component } from 'react';
import NavBar from './NavBar';
import DrinkPage from './DrinkPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Mixd.in" style='inverse'/>
        <DrinkPage/>
      </div>
    );
  }
}

export default App;
