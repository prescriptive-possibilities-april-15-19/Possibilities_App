//the form for the search bar for the S.M.I.L.E.S.
import React from 'react'


let SmilesSearch = props => {
  return(
    <div>
      <form onSubmit={props.searchSmiles}> 
        <input
          onChange={props.handleChange}
          placeholder="name"
          value={props.search}
          name="search"
        />
        <button type='submit' onClick={props.searchSmiles}>Search</button>
      </form>
    </div> 
  )
}

export default SmilesSearch;