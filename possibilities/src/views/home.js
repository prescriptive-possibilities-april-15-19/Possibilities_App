//dashboard for the application when you first open it, possibly put some data about the app and maybe number 1 searched item or an image of two compounds combined
import React from 'react'

//import connecter for react-redux
import { connect } from 'react-redux'

//import styled components 
import styled from 'styled-components'

//import actions
// import { } from '../actions'

//import component 
import { MoleculeViewer } from '../components'


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
        <MoleculeViewer url="https://files.rcsb.org/view/3LPT.pdb" ext="pdb" loadImg="https://www.reddit.com/r/loadingicon/comments/7cwyib/beaker_loading_icon/" />
        <p>Welcome to a world of possibilities, that will help shape the way you look at the medical field and it's applications to your daily life.</p>
        <p>Welcome to Prescriptive Possibilities</p>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  proteinData: state.dataReducer.proteinData,
  smileData: state.dataReducer.smileData
})

export default connect( mapStateToProps, { } )(HomePage);