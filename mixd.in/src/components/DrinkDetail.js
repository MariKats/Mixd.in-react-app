import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Popup from 'react-popup';
import SkyLight from 'react-skylight';
import Step from './Step';



export default class DrinkDetail extends Component {
  constructor(props) {
    super(props)
    
    this.getIngredients = this.getIngredients.bind(this)
    this.startMaking = this.startMaking.bind(this)
    
    
    this.state = {
      steps: props.drink.steps
    }
  }

  startMaking() {
    this.refs.simpleDialog.show()
  }

  getIngredients(ingredients){
    const smt = ingredients.reduce((allIng, ing)=>{
      if(`${ing.unit} of ${ing.name}` in allIng){
        allIng[`${ing.unit} of ${ing.name}`]++
      } else {
        allIng[`${ing.unit} of ${ing.name}`]=1
      }
      return allIng
    }, {})

    let sorted = Object.keys(smt).map(k=>`${smt[k]} ${k}`)
    let results = sorted.map(k => {
      if(k.includes('ounce') || k.includes('cup')) {
        var sp = k
        var num = parseInt(sp.split(" ")[0])/2
        var split = sp.split(" ").splice(1, 3)
        split.unshift(num.toString())
        if (num !== 1){
          split[1]=split[1]+`s`
        }
        var joined = split.join(" ")
        return joined
      }
      return k
    })
    
    return results
  }
  
  render(props) {
    return(<div className='row inverse'>
      <div className='col-md-4'>
        <div className='panel panel-default'>
          <div className='panel-heading'><h1>{this.props.drink.name}</h1></div>
          <div className='panel-body'>
          <h3>Description:</h3> <p>{this.props.drink.description}</p>
          <h3>Ingredients:</h3>
          {this.getIngredients(this.props.drink.ingredients).map((ingredient, index) => <p key={index}>{ingredient}</p>)}
          </div>
          <Link to={`/drinks/${this.props.drink.id}/make`}>Make Drink</Link>
          <button onClick={this.startMaking}>Open Modal</button>
          <SkyLight hideOnOverlayClicked ref="simpleDialog" title={this.props.drink.name}>
            <Step steps={this.props.drink.steps}/>
          </SkyLight>
          
        </div>
      </div>
    </div>)

  }
  



}
