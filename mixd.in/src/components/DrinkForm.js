import React,{Component} from 'react';

export default class DrinkForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleIngredientChange = this.handleIngredientChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderIngredientInputs = this.renderIngredientInputs.bind(this)
    this.addIngredientInput = this.addIngredientInput.bind(this)
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
    this.props.onSubmit(this.state)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleIngredientChange(id, name, unit, quantity){
    this.setState((previousState) => {
      return {
        ingredients: previousState.ingredients.map((ingre) =>{
          if (ingre.id !== parseInt(id, 10)){
            return ingre
          } else {
            return {
              id: id,
              name: name,
              unit: unit,
              quantity: quantity,
            }
          }
        })
      }
    })
  }

  renderUnitSelection(ingre){
    return (
    <select key={ingre.id + `unit`} id={ingre.id} name="unit" defaultValue={ingre.unit} onChange={(event) => this.handleIngredientChange(ingre.id, ingre.name, event.target.value, ingre.quantity)}>
      <option value=""> </option>
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
      return (<select key={ingre.id + `quantity`} id={ingre.id} name="quantity" defaultValue={ingre.quantity} onChange={(event) => this.handleIngredientChange(ingre.id, ingre.name, ingre.unit, event.target.value)}>
        <option value=""> </option>
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
      <div className="ingredients">
        <input key={ingre.id + `ing`} type='text' id={ingre.id} name="name" placeholder="Ingredient Name" defaultValue={ingre.name} onChange={(event) => this.handleIngredientChange(ingre.id, event.target.value, ingre.unit,  ingre.quantity)} />
        {this.renderMeasurmentSelection(ingre)}
        {this.renderUnitSelection(ingre)}
      </div>
    ))
  }

  addIngredientInput(){
    this.setState(function(previousState){
      return { ingredients: [...previousState.ingredients, {id: previousState.ingredients.length +1, name:'', unit:'', quantity:''}]}
    })
  }

  render() {
    return (
        <div className="drink-input">
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder="Name of Drink" name="name" value={this.state.name} onChange={this.handleChange}/>
            <input type='text' placeholder="Drink Description" name="description" value={this.state.description} onChange={this.handleChange}/>
            {this.renderIngredientInputs() }
            <input type='submit' submitText={this.props.submitText}/>
          </form>
          <button onClick={this.addIngredientInput}>Add Additional Ingredient</button>
        </div>
    );
  }
}
