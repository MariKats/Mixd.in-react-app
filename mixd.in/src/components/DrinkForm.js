import React,{Component} from 'react';

export default class DrinkForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: '',
      description: '',
      ingredients: [{id: 1, name:'', unit:''}],
      steps: [{name:'', length_of_time:''}],
      equipments: [{name:''}],
      tags: [{name:''}]
      }
    }

  handleSubmit(event){
    event.preventDefault()
    this.props.onSubmit({ name: this.state.name })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state.name))
  }

  handleIngredientChange(id, name, unit){
    this.setState(function(previousState){
      return {
        ingredients: previousState.ingredients.map((ingre) =>{
          if (ingre.id !== id){
            return ingre
          } else {
            return {id: id, name: name, unit: unit}
          }
        })
      }
    })
  }

  renderIngredientInputs(){
    return this.state.ingredients.map( ingre => (
      <input key={ingre.id} type='text' placeholder="Ingredient Name" value={ingre.name, ingre.description} onChange={(event) => this.handleIngredientChange(ingre.id, event.target.value)} />
    ))
  }

  addIngredientInput(){
    this.setState(function(previousState){
      return { ingredients: [...previousState.ingredients, {id: previousState.ingredients.length +1, number:''}]}
    })
  }

  render() {
    return (
        <div className="drink-input">
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder="Name of Drink" name="name" value={this.state.name} onChange={this.handleChange}/>
            <input type='text' placeholder="Drink Description" name="description" value={this.state.description} onChange={this.handleChange}/>
            {this.renderIngredientInputs() }
            <input type='submit' value="Create a Drink!"/>
          </form>
          <button onClick={this.addIngredientInput.bind(this)}>Add Additional Ingredient</button>
        </div>
    );
  }
}
