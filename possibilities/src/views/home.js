import React from 'react'

//import connecter for react-redux
import { connect } from 'react-redux'

//import styled components 
import styled from 'styled-components'

//import other components
import { Navigation } from '../components/index'

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
        <Navigation />

      </div>
    )
  }
}