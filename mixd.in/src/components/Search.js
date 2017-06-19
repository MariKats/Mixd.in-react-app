import React from 'react'

const Search = (props) => {
  function onChange(event){
    props.onChange(event)
  }
  return (
    <div className="drink-search col-xs-4 col-xs-offset-4">
      <input
        className="form-control"
        type="text"
        placeholder={"Search Drink Recipes or Ingredients"}
        onChange={onChange}
      />

    </div>
  )
}

export default Search
