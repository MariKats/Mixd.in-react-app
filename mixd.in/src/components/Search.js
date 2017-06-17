import React from 'react'

const Search = (props) => {
  function onChange(event){
    props.onChange(event)
  }
  return (
    <div className="drink-search">
      <input
        type="text"
        placeholder={"Search Drink Recipes or Ingredients"}
        onChange={onChange}
      />

    </div>
  )
}

export default Search
