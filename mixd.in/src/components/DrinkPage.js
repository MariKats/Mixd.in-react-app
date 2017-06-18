import React,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import DrinkList from './DrinkList';
import DrinkForm from './DrinkForm';
// import DrinkEditForm from './DrinkForm';
import DrinkDetail from './DrinkDetail';
import DrinksAdapter from '../adapters';
import Search from './Search';

export default class DrinkPage extends Component {
  constructor(props){
    super(props);
    this.createDrink = this.createDrink.bind(this)
    this.deleteDrink = this.deleteDrink.bind(this)
    // this.updateDrink = this.updateDrink.bind(this)
    this.state = {
      drinks: []
    }
  }

  componentDidMount(){
    DrinksAdapter.allDrinks()
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

deleteDrink(id){
    DrinksAdapter.destroy(id)
    .then( () => {
        this.setState( previousState => {
          return {
            drinks: previousState.drinks.filter( drink => drink.id !== id )
          }
        })
        // this.props.history.push("/drinks")
      })
  }

  // updateDrink(drink){
  //   DrinksAdapter.update(drink)
  //   .then(drinks => this.setState(function(previousState){
  //     return {
  //       drinks: previousState.drinks.map(function(d){
  //         if (d.id !== drink.id ) {
  //           return d
  //         } else {
  //           return drink
  //         }
  //       })
  //     }
  //   })
  // )
  //   // this.props.history.push(`/drinks/${drink.id}`)
  // }

  render() {
      return (
          <div className="row">
            <div className='col-md-4'>
              <DrinkList drinks={this.state.drinks} />
            </div>
            <div className='col-md-8'>
              <Switch>

                <Route exact path='/drinks/new' render={() => <DrinkForm onSubmit={this.createDrink} submitText="Create a Drink"/>} />
                <Route exact path='/drinks/:id' render={({match}) => {
                  const id = match.params.id
                  const drink = this.state.drinks.find( c =>  c.id === parseInt(id, 10) )
                  return <DrinkDetail drink={drink} deleteDrink={this.deleteDrink}/>
                }} />
              </Switch>
            </div>
          </div>
      );
    }
}

// <Route exact path='/drinks/:id/edit' render={({match}) => {
// const id = match.params.id
// const drink = this.state.drinks.find( d =>  d.id === parseInt(id) )
// if (!drink) {
//   return null
// }
// return <DrinkForm drink={drink} onSubmit={this.updateDrink} submitText="Edit Drink"/>
// }} />
