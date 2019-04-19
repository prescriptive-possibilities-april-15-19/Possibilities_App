import React from 'react'

//import connecter for react-redux
import { connect } from 'react-redux'

//import styled components 
import styled from 'styled-components'

//import components that will be used
import { ProteinList, ProteinSearch } from '../components'

//import actions
import { grabProtein } from '../actions'


let Container = styled.div`
  min-height: 100vh;
  
`

//display all of the results for the search
class ResultsProtein extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
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
      <Container>
        <ProteinSearch search={this.state.search} handleChange={this.handleChange} searchProtein={this.searchProtein}/>
        {this.props.proteinData.length < 1
        ? 
          <p>Waiting for a proper search</p>
        :
          <ProteinList protein={this.props.proteinData}/>
        }
      </Container>

    )
  }
}

const mapStateToProps = state => ({
  proteinData: state.dataReducer.proteinData
})

export default connect( mapStateToProps, { grabProtein } )(ResultsProtein);