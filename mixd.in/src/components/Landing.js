import React,{Component} from 'react';
import { Route } from 'react-router-dom'
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

    // search(){
    //   var search = this.state.drinks.filter(drink => {
    //     if(drink.name.includes(this.state.searchTerm)){
    //       return <li>Hola Muchacho</li>
    //     }
    //   })
    //   return search
    // }

    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        }, console.log(this.state.searchTerm))
        let filter = this.state.drinks.filter(drink => {
          if (drink.name.includes(event.target.value)){
            return drink
          }
          if (drink.description.includes(event.target.value)){
            return drink
          }
          return false
        })
        this.setState(()=>{
          return {searchResults: filter}
        })
    }

    render() {
        return(
          <div>
            <div className="row jumbotron text-center">
                <h1>Mixd.In</h1>
                <h1><small>Pick Your Poison</small></h1>
                <Search onChange={this.handleChange}/>
            </div>
            <ul>
              {this.state.searchResults.map(res => {return <SearchResults key={res.id} results={res}/>})}
            </ul>
          </div>

        )
    }
}
