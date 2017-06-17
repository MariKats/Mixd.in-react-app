import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import DrinkPage from './DrinkPage';
import DrinkDetail from './DrinkDetail';
import Landing from './Landing';
import StepsContainer from './StepsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Mixd.in" style='inverse'/>
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/drinks' render={() => <DrinkPage />} />
          <Route exact path='/drinks/:id' render={() => <DrinkDetail />} />
          <Route path='/drinks/:id/make' render={() => <StepsContainer />} />
        </Switch>
        
      </div>
    );
  }
}


export default App;
