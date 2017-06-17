import React,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import DrinkList from './DrinkList';
import DrinkForm from './DrinkForm';
import DrinkDetail from './DrinkDetail';
import DrinksAdapter from '../adapters';
import Search from './Search';

export default class DrinkPage extends Component {
  constructor(){
    super();
    this.createDrink = this.createDrink.bind(this)
    this.state = {
      drinks: [],
      selectedDrink: ''
    }
  }

  componentDidMount(){
    DrinksAdapter.all()
    .then( drinks => this.setState({drinks}) )
    // console.log(this.state.drinks)
  }

  createDrink(drink){
    console.log(drink)
    DrinksAdapter.create(drink)
    .then(drink => this.setState((previousState) => {
      return {
        drinks: [...previousState.drinks, drink]
      }
    })
  )
}
  render() {
      return (
          <div className="row">
            <div className='col-md-4'>
              <DrinkList drinks={this.state.drinks} />
            </div>
            <div className='col-md-8'>
              <Switch>
                <Route exact path='/drinks/new' render={() => <DrinkForm onSubmit={this.createDrink} submitText="Create Student"/>} />
                <Route exact path='/drinks/:id' render={({match}) => {
                  const id = match.params.id
                  const drink = this.state.drinks.find( c =>  c.id === parseInt(id, 10) )
                  return <DrinkDetail drink={drink}/>
                }} />
              </Switch>
            </div>
          </div>
      );
    }
}
