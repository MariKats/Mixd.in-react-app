import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'


const DrinkList = ({ drinks }) => (
    <div>
      <h2>Pick Your Poison:</h2>
      <ul className="list-group">
        { drinks.map( drink => <li key={drink.id} className="list-group-item"><Link to={`/drinks/${drink.id}`}>{ drink.name }</Link></li>)}
      </ul>
      <Switch>
        <Route path='/drinks/new' />
        <Route render={() => <Link to="/drinks/new">Add a Drink</Link> } />
      </Switch>
    </div>
)

export default DrinkList;
