import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SkyLight from 'react-skylight';
import Step from './Step';
import { Collapse, Accordion, Panel } from 'react-bootstrap'

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
  const descr = ingredients.reduce((allIng, ing)=>{
    if(`${ing.unit} ${ing.name}` in allIng){
      allIng[`${ing.unit} ${ing.name}`]++
    } else {
      allIng[`${ing.unit} ${ing.name}`]=1
    }
    return allIng
  }, {})

    let sorted = Object.keys(descr).map(key=>`${descr[key]} ${key}`)
    let results = sorted.map(key => {
    var num = parseInt(key.split(" ")[0])/2
    var split = key.split(" ").splice(1, key.length-1)
    split.unshift(num.toString())

    if (num !== 1 && (split[1] === "dash" || split[1] === "splash" || split[1] === "pinch" || split[1] === "glass")){
      split[1]=split[1]+`es`
    }

    else if (num !== 1 && split[1] === "pony"){
      split[1]=split[1].slice(0, -1) +`ies`
    }

    else if (num !== 1 && split[1] === "mickey"){
      split[1]=split[1].slice(0, -2) +`ies`
    }

    else if (num !== 1 && (split[1] === "tbs" || split[1] === 'tsps')){
      split[1]
    }

    else if (num !== 1 && (split[1] === "cup" || split[1] === "squeeze" || split[1] === "ounce" || split[1] === "wedge" || split[1] === "sprig" || split[1] === "pint" || split[1] === "shot")) {
      split[1]=split[1]+`s`
    }

    var joined = split.join(" ")
    return joined

  })
  return results
}


render() {
  return(
    <div className='row inverse'>
      <div className='col-md-8'>
        <div className='panel panel-default'>
          <div className='panel-heading text-center'><h1>{this.props.drink.name}</h1></div>
            <div className='panel-body'>

              {this.props.drink.description.length > 0 &&
                <div className="description text-center">
                  <h3>Description</h3>
                  <p>{this.props.drink.description}</p>
                </div>}

                {" "}
              <Accordion>
                <Panel header="Equipment" eventKey="1">
                  {this.props.drink.equipments[0].name !== "" &&
                    <div className="equipments">
                      <ul>
                        {this.props.drink.equipments.map(equip => <li key={equip.id}>{equip.name}</li>)}
                      </ul>
                    </div>
                  }
                </Panel>
                <Panel header="Ingredients" eventKey="2">
                  {this.props.drink.ingredients.length > 0 &&
                    <div className="ingredients">
                      <ul>
                        {this.getIngredients(this.props.drink.ingredients).map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                      </ul>
                    </div>
                  }
                </Panel>
                <Panel header="Steps" eventKey="3">
                  {this.props.drink.steps[0].name !== "" &&
                    <div className="steps">
                      <ol>
                        {this.props.drink.steps.map(step => <li key={step.id}>{step.name} - Time: {step.length_of_time} seconds </li>)}
                      </ol>
                    </div>
                    }
                </Panel>
                <Panel header="Tags" eventKey="5">
                  {this.props.drink.tags[0].name !== "" &&
                    <div className="tags">
                      <ul>
                        {this.props.drink.tags.map(tag => <li key={tag.id}>{tag.name}</li>)}
                      </ul>
                    </div>
                    }
                </Panel>
              </Accordion>

            </div>
            <div className="panel-footer text-center">
              <a onClick={this.startMaking}>Make Drink</a>{" "}-{" "}
              <a href='#' onClick={() => this.deleteDrink(this.props.drink.id) }>Delete</a>{" "}-{" "}
              <Link to={`/drinks/${this.props.drink.id}/edit`}>Edit</Link>
            </div>
            <SkyLight hideOnOverlayClicked ref="simpleDialog" title={this.props.drink.name}>
              <Step steps={this.props.drink.steps}/>
            </SkyLight>
        </div>
      </div>
    </div>)

  }
}
