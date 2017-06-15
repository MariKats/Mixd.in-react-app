import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'


const CocktailList = ({ cocktails }) => (
    <div>
      <h2>Pick Your Poison:</h2>
      <ul className="list-group">
        { cocktails.map( cocktail => <li key={cocktail.id} className="list-group-item"><Link to={`/cocktails/${cocktail.id}`}>{ cocktail.name }</Link></li>)}
      </ul>
      <Switch>
        <Route path='/cocktails/new' />
        <Route render={() => <Link to="/cocktails/new">Add a Cocktail</Link> } />
      </Switch>
    </div>
)

export default CocktailList;
