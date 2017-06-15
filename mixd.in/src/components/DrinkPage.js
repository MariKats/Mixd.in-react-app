import React,{Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import CocktailList from './CocktailList';
import CocktailForm from './CocktailForm';
import DrinkDetail from './DrinkDetail';
import DrinksAdapter from '../adapters';

export default class CocktailPage extends Component {
  constructor(){
    super();
    this.createCocktail = this.createCocktail.bind(this)
    this.state = {
      cocktails: [],
      selectedCocktail: ''
    }
  }

  componentDidMount(){
    DrinksAdapter.all()
    .then( cocktails => this.setState({cocktails}) )
    console.log(this.state.cocktails)
  }

    createCocktail(cocktail){
      console.log(cocktail)
      this.setState(function(previousState){
        return {
          cocktails: [...previousState.cocktails, cocktail]
        }
      }, console.log(this.state.cocktais))
    }

    render() {
        return (
            <div className="row">
              <div className='col-md-4'>
                <CocktailList cocktails={this.state.cocktails} />
              </div>
              <div className='col-md-8'>
                <Switch>
                  <Route exact path='/cocktails/new' render={() => <CocktailForm onSubmit={this.createCocktail} submitText="Create Student"/>} />
                  <Route exact path='/cocktails/:id' render={({match}) => {
                    const id = match.params.id
                    const cocktail = this.state.cocktails.find( c =>  c.id === parseInt(id) )
                    return <DrinkDetail cocktail={cocktail}/>
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
