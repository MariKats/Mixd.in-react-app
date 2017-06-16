import React from 'react'


function getIngredients(ingredients){
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

const DrinkDetail = ({drink}) => {
  if (!drink){
    return null
  }

  // function filterById(array, id) {
  //   const temp = array.map(ing => ing[id]);
  //     return array.filter((ing, i) =>
  //       temp.indexOf(ing[id]) === i
  //     );
  //   }


  return(<div className='row inverse'>
      <div className='col-md-4'>
        <div className='panel panel-default'>
          <div className='panel-heading'><h1>{drink.name}</h1></div>
          <div className='panel-body'>
          <h3>Description:</h3> <p>{drink.description}</p>
          <h3>Ingredients:</h3>
          {getIngredients(drink.ingredients).map((ingredient, index) => <p key={index}>{ingredient}</p>)}
          </div>
        </div>
      </div>
    </div>)
}



export default DrinkDetail;