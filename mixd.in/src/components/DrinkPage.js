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
    debugger
  //   DrinksAdapter.create(drink)
  //   .then(drink => this.setState((previousState) => {
  //     return {
  //       drinks: [...previousState.drinks, drink]
  //     }
  //   })
  // )
}


    // createDrink(drink){
    //
    //   debugger
    // let dname = drink.shift()
    // // debugger
    //   console.log(drink)
    //   let new_drink = {
    //     name: drink[0].value,
    //     description: drink[1].value,
    //     ingredients:
    //   }


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
                    const drink = this.state.drinks.find( c =>  c.id === parseInt(id) )
                    return <DrinkDetail drink={drink}/>
                  }} />
                </Switch>
              </div>
            </div>
        );
    }
}

      // <Route exact path='/students/:id/edit' render={({match}) => {
      //   const id = match.params.id
      //   const student = students.find( s =>  s.id === parseInt(id) )
      //   if (!student) {
      //     return null
      //   }
      //   return <StudentForm student={student} onSubmit={updateStudent} submitText="Edit Student"/>
      // }} />
