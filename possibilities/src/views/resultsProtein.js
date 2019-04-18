import React from 'react'

//import connecter for react-redux
import { connect } from 'react-redux'

//import styled components 
import styled from 'styled-components'

//import components that will be used
import { ProteinList, ProteinSearch } from '../components'

//import actions
import { grabProtein, grabSmiles } from '../actions'

//display all of the results for the search
class ResultsProtein extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div>

      </div>

    )
  }
}

const mapStateToProps = state => ({
  proteinData: state.proteinData,
  smileData: state.smileData
})

export default connect( mapStateToProps, { grabProtein, grabSmiles } )(ResultsProtein);