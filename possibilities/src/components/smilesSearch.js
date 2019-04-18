//the form for the search bar for the S.M.I.L.E.S.
import React from 'react'

//import the connect between react and redux
import { connect } from 'react-redux'

class SmilesSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data,
      searchDB: this.props.searchDB,
      search: ''
    }
  }

  componentDidMount() {

  }

  handleChange = event => {
    this.setState({
      search : event.target.value
    })  
  }

  render(){
    return(
      <div>
        <form> 
          <input
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect( mapStateToProps, {  } )(SmilesSearch);