const baseUrl = `http://localhost:3000/api`

export default class DrinksAdapter {
  static all(){
    return fetch(`${this.url()}`)
    .then( response => response.json() )
  }

  static url(){
    return `${baseUrl}/drinks`
  }
}
