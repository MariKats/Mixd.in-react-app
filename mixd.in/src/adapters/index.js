const baseUrl = `http://localhost:3000/api`

export default class DrinksAdapter {
  static all(){
    return fetch(`${this.url()}`)
    .then( response => response.json() )
  }

  static url(){
    return `${baseUrl}/drinks`
  }

  static create(drink){
    return fetch(`${this.url()}/${drink.id}`,
    {method: 'POST',
    headers: this.headers(),
    body: JSON.stringify({
      drink: {name: drink.name.value, description: drink.description.value, ingredients: drink.ingredients.value}
      })
    })
    .then( response => response.json() )
  }

}
