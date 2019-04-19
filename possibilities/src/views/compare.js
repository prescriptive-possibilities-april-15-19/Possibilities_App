import React from 'react'

import { connect } from 'react-redux'

class Compare extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  proteinData: state.dataReducer.proteinData,
  smileData: state.dataReducer.smileData
})

export default connect( mapStateToProps, { } )(Compare);