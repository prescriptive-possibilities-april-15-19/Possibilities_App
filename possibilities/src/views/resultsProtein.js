import React from 'react'

//import connecter for react-redux
import { connect } from 'react-redux'

//import styled components 
import styled from 'styled-components'

//import components that will be used
import { ProteinList, ProteinSearch } from '../components'

//import actions
import { grabProtein } from '../actions'

//display all of the results for the search
class ResultsProtein extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  componentDidMount() {
    
  }

  searchProtein = event => {
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

  render() {console.log(this.props.proteinData)
    return(      
      <div>
        <ProteinSearch search={this.state.search} handleChange={this.handleChange} searchProtein={this.searchProtein}/>
        {!this.props.proteinData 
        ? 
          <p>Waiting for a proper search</p>
        :
          <ProteinList protein={this.props.proteinData}/>
        }
      </div>

    )
  }
}

const mapStateToProps = state => ({
  proteinData: state.proteinData
})

export default connect( mapStateToProps, { grabProtein } )(ResultsProtein);