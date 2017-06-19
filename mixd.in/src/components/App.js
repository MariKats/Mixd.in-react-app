import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
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
          <Route path='/drinks' render={() => <DrinkPage />} />
          <Route path='/drinks/:id/make' render={() => <StepsContainer />} />
          <Route path="/about" render={() => {
            return (
              <div className="container">
                <div className="row row-centered">
                    <div className="col-xs-6 col-centered">
                      <Panel className="about text-center">
                        <p>This is an app for drink lovers.</p>
                        <p>Users can search for their favorite recipes, either by name or by ingredient.</p>
                        <p>Users can also add to the collection by posting their own recipes.</p>
                        <p>Lastly, the app guides users step-by-step through the drink-making process.</p>
                      </Panel>
                    </div>
                </div>
            </div>

            )
          }} />
        </Switch>

      </div>
    );
  }
}


export default App;
