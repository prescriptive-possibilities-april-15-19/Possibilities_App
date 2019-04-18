import React from 'react'

//import connecter for react-redux
import { connect } from 'react-redux'

//import styled components 
import styled from 'styled-components'

//import components that will be used
import { SmilesList, SmilesSearch } from '../components'

//import actions
import { grabSmiles } from '../actions'

//display all of the results for the search
class ResultsSmiles extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  componentDidMount() {
    
  }

  searchSmiles = event => {
    event.preventDefault()
    this.props.grabProtein(this.state.search)
    console.log(' result', this.props.proteinData)
    this.setState({
      search: ''
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })  
  }

  render() {
    return(
      <div>
        <SmilesSearch />
        {!this.props.proteinData 
        ? 
          <p>Waiting for a proper search</p>
        :
         <SmilesList smile={this.props.smileData} />
        }
      </div>

    )
  }
}

const mapStateToProps = state => ({
  smileData: state.dataReducer.smileData
})

export default connect( mapStateToProps, { grabSmiles } )(ResultsSmiles);