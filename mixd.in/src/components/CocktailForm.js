import React,{Component} from 'react';

export default class CocktailForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: '',
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

  render() {
    return (
        <div className="class-name">
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <input type='submit' value="Create a Cocktail!"/>
          </form>
        </div>
    );
  }
}



// value={this.props.submitText}
// {this.renderPhoneInputs()}
// <button onClick={this.addPhoneInput.bind(this)}>Add More ingredients</button>
