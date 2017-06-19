import React,{Component} from 'react';

export default class DrinkForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleIngredientChange = this.handleIngredientChange.bind(this)
    this.handleEquipmentChange = this.handleEquipmentChange.bind(this)
    this.handleTagChange = this.handleTagChange.bind(this)
    this.handleStepChange = this.handleStepChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderIngredientInputs = this.renderIngredientInputs.bind(this)
    this.addIngredientInput = this.addIngredientInput.bind(this)
    this.renderTagInputs = this.renderTagInputs.bind(this)
    this.addTagInput = this.addTagInput.bind(this)
    this.renderStepInputs = this.renderStepInputs.bind(this)
    this.addStepInput = this.addStepInput.bind(this)
    this.renderEquipmentInputs = this.renderEquipmentInputs.bind(this)
    this.addEquipmentInput = this.addEquipmentInput.bind(this)
    this.state = {
      name: '',
      description: '',
      ingredients: [{id: 1, name:'', unit:'', quantity:''}],
      steps: [{id: 1, name:'', length_of_time:''}],
      equipments: [{id: 1, name:''}],
      tags: [{id: 1, name:''}]
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

  // ingredients
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
    }, console.log(this.state.ingredients))
  }

  renderUnitSelection(ingre){
    return (
    <select key={ingre.id + `unit`} id={ingre.id} className="form-control" name="unit" defaultValue={ingre.unit} onChange={(event) => this.handleIngredientChange(ingre.id, ingre.name, event.target.value, ingre.quantity)}>
      <option value="">Select Unit</option>
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
      return (<select key={ingre.id + `quantity`} className="form-control" id={ingre.id} name="quantity" defaultValue={ingre.quantity} onChange={(event) => this.handleIngredientChange(ingre.id, ingre.name, ingre.unit, event.target.value)}>
        <option value="">Select Quantity</option>
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
        <input key={ingre.id + `ing`} className="form-control" type='text' id={ingre.id} name="name" placeholder="Ingredient Name" defaultValue={ingre.name} onChange={(event) => this.handleIngredientChange(ingre.id, event.target.value, ingre.unit, ingre.quantity)} />
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

  // Equipment
  handleEquipmentChange(id, name){
    this.setState((previousState) => {
      return {
        equipments: previousState.equipments.map((equip) =>{
          if (equip.id !== id) {
            return equip
          } else {
            return {id: id, name: name}
          }
        })
      }
    })
  }

  renderEquipmentInputs(){
    return this.state.equipments.map( equip => (
      <div className="equipments">
      <input key={equip.id + `equip`} className="form-control" type='text' name="name" placeholder="Equipment Name" defaultValue={equip.name} onChange={(event) => this.handleEquipmentChange(equip.id, event.target.value)} />
      </div>
    ))
  }

  addEquipmentInput(){
    this.setState(function(previousState){
      return { equipments: [...previousState.equipments, {id: previousState.equipments.length+1, name:''}]}
    })
  }

  // Tags
  handleTagChange(id, name){
    this.setState((previousState) => {
      return {
        tags: previousState.tags.map((tag) =>{
          if (tag.id !== id) {
            return tag
          } else {
            return {id: id, name: name}
          }
        })
      }
    })
  }

  renderTagInputs(){
    return this.state.tags.map( tag => (
      <div className="tags">
      <input key={tag.id + `tag`} className="form-control" type='text' name="name" placeholder="Tag" defaultValue={tag.name} onChange={(event) => this.handleTagChange(tag.id, event.target.value)} />
      </div>
    ))
  }

  addTagInput(){
    this.setState(function(previousState){
      return { tags: [...previousState.tags, {id: previousState.tags.length+1, name:''}]}
    })
  }

  // Steps
  handleStepChange(id, name, time){
    this.setState((previousState) => {
      return {
        steps: previousState.steps.map((step) =>{
          if (step.id !== parseInt(id, 10)) {
            return step
          } else {
            return {id: id, name: name, length_of_time: time}
          }
        })
      }
    })
  }

  renderStepInputs(){
    return this.state.steps.map( step => (
      <div className="steps">
        <input key={step.id + ` step`} className="form-control" type='text' name="name" placeholder="Step Description" value={step.name} onChange={(event) => this.handleStepChange(step.id, event.target.value, step.length_of_time)} />
        <input key={step.id + ` time`} className="form-control" type='number' name="length_of_time" placeholder="Number of Seconds" value={step.length_of_time} onChange={(event) => this.handleStepChange(step.id, step.name, event.target.value)}/>
      </div>
    ))
  }

  addStepInput(){
    this.setState(function(previousState){
      return { steps: [...previousState.steps, {id: previousState.steps.length+1, name:'', length_of_time: ""}]}
    })
  }

  render() {
    return (
        <div className="container">
          <h1 className="col-sm-offset-1">Create A New Drink</h1>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-2">Name:</label>
            <div className="col-sm-3">
              <input type='text' className="form-control" placeholder="Name of Drink" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Description:</label>
            <div className="col-sm-3">
              <input type='text' className="form-control" placeholder="Drink Description" name="description" value={this.state.description} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Ingredients:</label>
            <div className="col-sm-3">
              {this.renderIngredientInputs() }
              <a href="#" onClick={this.addIngredientInput}>Add Additional Ingredient</a>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Equipment:</label>
            <div className="col-sm-3">
              {this.renderEquipmentInputs() }
              <a href="#" onClick={this.addEquipmentInput}>Add Additional Equipment</a>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Steps:</label>
            <div className="col-sm-3">
              {this.renderStepInputs() }
              <a href="#" onClick={this.addStepInput}>Add Additional Step</a>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">Tags:</label>
            <div className="col-sm-3">
              {this.renderTagInputs() }
              <a href="#" onClick={this.addTagInput}>Add Additional Tag</a>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-1 col-sm-3">
              <input type='submit' className="btn btn-default" value={this.props.submitText}/>
            </div>
          </div>
          </form>
        </div>
    );
  }
}
