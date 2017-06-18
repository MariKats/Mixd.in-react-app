const baseUrl = `http://localhost:3000/api`

export default class DrinksAdapter {
  static allDrinks(){
    return fetch(`${this.url()}`)
    .then( response => response.json() )
  }

  static allIng(){
    return fetch(`${baseUrl}/ingredients`)
    .then( response => response.json() )
  }

  static url(){
    return `${baseUrl}/drinks`
  }

  static create(drink){
    return fetch(`${this.url()}`,
    {method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
    body: JSON.stringify({
      drink: {name: drink.name, description: drink.description, ingredients: drink.ingredients}
      })
    })
    .then( response => response.json() )
  }

//   static update(drink){
//    return fetch(`${this.url()}/${drink.id}`, {
//     method: 'PATCH',
//     headers: {
//       'content-type': 'application/json',
//       'accept': 'application/json'
//     },
//     body: JSON.stringify({
//       drink: {name: drink.name}
//     })
//   })
// }

static destroy(id){
  return fetch(`${this.url()}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
  })
}

}
