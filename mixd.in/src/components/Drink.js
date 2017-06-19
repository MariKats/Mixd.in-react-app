import React from 'react';

const Drink = ({drink}) => {
  if (searchTerm !== ''){
    if (drink.name.includes(searchTerm) || drink.description.includes(searchTerm)) {
      return drink
    } else {
      return null
    }
  }
}

export default Drink;

export default class Drink extends Component {
  render()
}

//
//
// let filter = this.state.drinks.filter(drink => {
//   if (drink.name.includes(event.target.value)) {
//     return drink
//   }
//   if (drink.description.includes(event.target.value)){
//     return drink
//   }
//   if (drink.ingredients.includes)
// })
// this.setState(()=>{
//   return {searchResults: filter}
// })
//
// if (props.searchTerm !== ''){
//   if (props.transaction.description.includes(props.searchTerm) ||
//     props.transaction.category.includes(props.searchTerm)) {
//       return (
//         <tr>
//           <td>{props.transaction.posted_at}</td>
//           <td>{props.transaction.description}</td>
//           <td>{props.transaction.category}</td>
//           <td>{props.transaction.amount}</td>
//         </tr>
//       )
//     } else {
//       return null
//     }
// }
// return (
//   <tr>
//     <td>{props.transaction.posted_at}</td>
//     <td>{props.transaction.description}</td>
//     <td>{props.transaction.category}</td>
//     <td>{props.transaction.amount}</td>
//   </tr>
// )
// }
