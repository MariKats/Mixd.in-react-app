import React,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import DrinkList from './DrinkList';
import DrinkForm from './DrinkForm';
import DrinkEditForm from './DrinkEditForm';
import DrinkDetail from './DrinkDetail';
import DrinksAdapter from '../adapters';
import Search from './Search';
import PropTypes from "prop-types";

export default class DrinkPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
    super(props, context);
    this.createDrink = this.createDrink.bind(this)
    this.deleteDrink = this.deleteDrink.bind(this)
    this.updateDrink = this.updateDrink.bind(this)
    this.state = {
      drinks: []
    }
  }

  componentDidMount(){
    DrinksAdapter.allDrinks()
    .then( drinks => this.setState({drinks}) )
  }

  createDrink(drink){
    DrinksAdapter.create(drink)
    .then(drink => this.setState((previousState) => {
      return {
        drinks: [...previousState.drinks, drink]
      }
    })
  )
  this.context.router.history.push(`/drinks`)
}

deleteDrink(id){
    DrinksAdapter.destroy(id)
    .then( () => {
        this.setState( previousState => {
          return {
            drinks: previousState.drinks.filter( drink => drink.id !== id )
          }
        })
      })
  }

  updateDrink(drink){
    console.log(drink)
    DrinksAdapter.update(drink)
    .then(() => {
    this.setState(function(previousState){
      return {
        drinks: previousState.drinks.map(function(d){
          if (d.id !== drink.id ) {
            return d
          } else {
            return drink
          }
        })
      }
    })
    this.context.router.history.push(`/drinks/${drink.id}`)
  })
}

  render() {
      return (
          <div className="row">
            <div className='col-md-4'>
              <DrinkList drinks={this.state.drinks} />
            </div>
            <div className='col-md-8'>
              <Switch>

                <Route exact path='/drinks/new' render={() => <DrinkForm onSubmit={this.createDrink} submitText="Create Drink"/>} />

                <Route exact path='/drinks/:id' render={({match}) => {
                  const id = match.params.id
                  const drink = this.state.drinks.find( d =>  d.id === parseInt(id, 10) )
                  return <DrinkDetail drink={drink} deleteDrink={this.deleteDrink}/>
                }} />

                <Route exact path='/drinks/:id/edit' render={({match}) => {
                const id = match.params.id
                const drink = this.state.drinks.find( d =>  d.id === parseInt(id, 10) )
                if (!drink) {
                  return null
                }
                return <DrinkEditForm drink={drink} onSubmit={this.updateDrink} submitText="Edit Drink"/>
                }} />
              </Switch>
            </div>
          </div>
      );
    }
}
