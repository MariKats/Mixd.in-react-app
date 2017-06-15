import React from 'react'
import { Link } from 'react-router-dom'


const CocktailList = ({ cocktails }) => (
  <div>
      <h2>Cocktail List</h2>
      <ul>
        { cocktails.map( cocktail => <li key={cocktail.name}><Link to={`/cocktails/${cocktail.id}`}>{ cocktail.name }</Link></li>)}
      </ul>
    </div>
)

// <Switch>
//   <Route path='/cocktails/new' />
//   <Route render={() => <Link to="/cocktails/new">Add a Cocktail</Link> } />
// </Switch>

export default CocktailList;
