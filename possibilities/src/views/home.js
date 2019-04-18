//dashboard for the application when you first open it, possibly put some data about the app and maybe number 1 searched item or an image of two compounds combined
import React from 'react'

//import connecter for react-redux
import { connect } from 'react-redux'

//import styled components 
import styled from 'styled-components'

//import actions
import { grabProtein, grabSmiles } from '../actions'


class HomePage extends React.Component {
  constructor() {
    super() 
    this.state = {

    }
  }

  componentDidMount(){ 

  }

  render() {
    return( 
      <div>
        <div id="viewport"></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  proteinData: state.proteinData,
  smileData: state.smileData
})

export default connect( mapStateToProps, { grabProtein, grabSmiles } )(HomePage);