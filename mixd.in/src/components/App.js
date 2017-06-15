import React, { Component } from 'react';
import NavBar from './NavBar';
import CocktailPage from './CocktailPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Mixd.in" style='inverse'/>
        <CocktailPage/>
      </div>
    );
  }
}

export default App;
