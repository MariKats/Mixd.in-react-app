import React,{Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Search from './Search';
import DrinksAdapter from '../adapters'
// import SearchResults from './SearchResults'


const SearchResults = ({results}) => {
  return (
  <li>{results.name}</li>
)}

export default class Landing extends Component {
    constructor () {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
          drinks: [],
          ingredients: [],
          searchTerm: "",
          searchResults: []
        }
    }

    componentDidMount() {
      DrinksAdapter.allDrinks()
      .then(drinks => this.setState({drinks}))
      DrinksAdapter.allIng()
      .then(ingredients => this.setState({ingredients}))
    }
    
    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        })

        let filter = this.state.drinks.filter(drink => {
          if (drink.name.includes(event.target.value)) {
            return drink
          }
          if (drink.description.includes(event.target.value)){
            return drink

          }
        })
        this.setState(()=>{
          return {searchResults: filter}
        })

        // let ingredientfilter = this.state.ingredients.filter(ingredient => {
        //   if (ingredient.name.includes(event.target.value)){
        //     return ingredient
        //   }
        //   return false
        // })
        // this.setState( (previousState) => {
        //   return {searchResults: [...previousState, ingredientfilter]}
        // })
    }

    render() {
        return(
          <div>
            <div className="row jumbotron text-center">
                <h1><img src='./better-mixd-in.png' /></h1>
                <h1><small>Pick Your Poison</small></h1>
                <Search onChange={this.handleChange}/>
            </div>
            <ul>
              {this.state.searchResults.map(res => {return <Link to= {`/drinks/${res.id}`}><SearchResults key={res.id} results={res}/></Link>})}
            </ul>
          </div>

        )
    }
}
