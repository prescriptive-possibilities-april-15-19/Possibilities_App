//the form for the search bar for the proteins
import React from 'react'

let ProteinsSearch = props => {
  return(
    <div>
      <form onSubmit={props.searchProtein}> 
        <input
          onChange={props.handleChange}
          placeholder="name"
          value={props.search}
          name="search"
        />
        <button type='submit' onClick={props.searchProtein}>Search</button>
      </form>
    </div> 
  )
}

export default ProteinsSearch;