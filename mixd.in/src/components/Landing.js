import React,{Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Search from './Search';
import SearchResults from './SearchResults';
import DrinksAdapter from '../adapters'
import { Collapse } from 'react-bootstrap';
// import SearchResults from './SearchResults'



export default class Landing extends Component {
    constructor () {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
          drinks: [],
          ingredients: [],
          searchTerm: "",
          searchResults: [],
          open: true
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
            searchTerm: event.target.value,
            open: false
        })

        let dfilter = this.state.drinks.filter(drink => {
          if (drink.name.toUpperCase().includes(event.target.value.toUpperCase())) {
            drink.type = "drink"
            return drink
          }
          if (drink.description.toUpperCase().includes(event.target.value.toUpperCase())){
            drink.type = "drink"
            return drink
          }
          drink.ingredients.forEach((ingredient) => {
            if (ingredient.name.toUpperCase().includes(event.target.value.toUpperCase())) {
              drink.type = "drink"
              return drink
            }
          })
        })
        let ifilter = this.state.ingredients.filter(ingredient => {
          if (ingredient.name.toUpperCase().includes(event.target.value.toUpperCase())) {
            ingredient.type = "ingredient"
            return ingredient
          }
        })
        let filter = dfilter.concat(ifilter)

        this.setState(()=>{
          return {searchResults: filter}
        })

    }

    render() {
        return(
          <div>
            <div className="main row text-center">
                <h1><img src='./better-mixd-in.png' /></h1>
                <Collapse in={this.state.open}><h3 className="animated tada" ><img src="./shaker.png" /></h3></Collapse>

                <h1><small>Pick Your Poison</small></h1>
                <Search onChange={this.handleChange} className="btn btn-warning"/>
            </div>
            <ul id="accordion">
              {this.state.searchResults.map(res => {return <SearchResults key={res.id} results={res}/>})}
            </ul>
          </div>

        )
    }
}
