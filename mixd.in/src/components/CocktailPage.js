import React,{Component} from 'react';
import CocktailList from './CocktailList';
import CocktailForm from './CocktailForm';

export default class CocktailPage extends Component {
  constructor(){
    super();
    this.createCocktail = this.createCocktail.bind(this)
    this.state = {
      cocktails: [
        { name: "Bloody Mary" },
        { name: "Tequila Sunrise" },
        { name: "Mai Tai" },
        { name: "Pina Colada" },
      ],
      selectedCocktail: ''
    }
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
            <div className="class-name">
              <CocktailList cocktails={this.state.cocktails} />
              <CocktailForm onSubmit={this.createCocktail}/>
            </div>
        );
    }
}
