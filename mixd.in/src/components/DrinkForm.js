import React,{Component} from 'react';

export default class DrinkForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: '',
      description: '',
      ingredients: [{id: 1, name:'', unit:'', quantity:''}],
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

  handleIngredientChange(id, value, type, quantity){
    this.setState(function(previousState){
      return {
        ingredients: previousState.ingredients.map((ingre) =>{
          if (ingre.id !== id){
            return ingre
          } else {
            return {id: id, name: value, unit: type, quantity: quantity}
          }
        })
      }
    })
  }

  renderUnitSelection(ingre){
    return (
    <select key={ingre.id + `unit`} value={ingre.unit} onChange={(event) => this.handleIngredientChange(ingre.id, ingre.name, event.target.value, ingre.quantity)}>
      <option value="ounce">Ounce</option>
      <option value="dash">Dash</option>
      <option value="cup">Cup</option>
      <option value="wedge">Wedge</option>
      <option value="sprig">Sprig</option>
      <option value="squeeze">Squeeze</option>
      <option value="tbsp">Tbsp</option>
      <option value="tsp">Tsp</option>
      <option value="pony">Pony</option>
      <option value="shot">Shot</option>
      <option value="splash">Splash</option>
      <option value="pinch">Pinch</option>
      <option value="pint">Pint</option>
      <option value="glass">Glass</option>
      <option value="mickey">Mickey</option>
    </select>
    )
  }


  renderMeasurmentSelection(ingre){
      return (<select key={ingre.id + `quantity`} value={ingre.quantity} onChange={(event) => this.handleIngredientChange(ingre.id, ingre.name, event.target.value, ingre.unit)}>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
        <option value="5.5">5.5</option>
        <option value="6">6</option>
        <option value="6.5">6.5</option>
        <option value="7">7</option>
        <option value="7.5">7.5</option>
        <option value="8">8</option>
        <option value="8.5">8.5</option>
        <option value="9">9</option>
        <option value="9.5">9.5</option>
        <option value="10">10</option>
      </select>)
  }

  renderIngredientInputs(){
    return this.state.ingredients.map( ingre => (
      <div>
        <input key={ingre.id + `ing`} type='text' placeholder="Ingredient Name" value={ingre.name} onChange={(event) => this.handleIngredientChange(ingre.id, event.target.value, ingre.unit, ingre.quantity)} />
        {this.renderMeasurmentSelection(ingre)}
        {this.renderUnitSelection(ingre)}
      </div>
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
