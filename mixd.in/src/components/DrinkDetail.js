import React from 'react'
import { Link } from 'react-router-dom'

function getIngredients(ingredients){
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
    return key
  })
  return results
}

const DrinkDetail = ({drink, deleteDrink}) => {
  if (!drink){
    return null
  }

  return(<div className='row inverse'>
      <div className='col-md-4'>
        <div className='panel panel-default'>
          <div className='panel-heading'><h1>{drink.name}</h1></div>
          <div className='panel-body'>
          <h3>Description:</h3> <p>{drink.description}</p>
          <h3>Ingredients:</h3>
          {getIngredients(drink.ingredients).map((ingredient, index) => <p key={index}>{ingredient}</p>)}
          </div>
          <Link to={`/drinks/${drink.id}/make`}>Make Drink</Link>
          <Link to={`/drinks/${drink.id}/make`}>Make Drink</Link>{" "}-{" "}
          <a href='#' onClick={() => deleteDrink(drink.id) }>Delete</a>{" "}-{" "}
          <Link to={`/drinks/${drink.id}/edit`}>Edit</Link>
        </div>
      </div>
    </div>)
}



export default DrinkDetail;
