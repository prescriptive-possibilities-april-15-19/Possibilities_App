
// Create NGL Stage object
var stage = new NGL.Stage( "viewport" );

// Handle window resizing
window.addEventListener( "resize", function( event ){
    stage.handleResize();
}, false );


// Load PDB entry 1CRN
stage.loadFile( "rcsb://1crn", { defaultRepresentation: true } );


import React, { Component } from 'react';
import { Stage } from 'ngl';

class MoleculeViewer extends Component {  
  constructor(props) {
    super(props);
    this.state = {stage: null}
  }

  componentDidMount() {
    this.setState({state: new Stage("viewport")});
    setTimeout( () => this.state.stage.loadFile(this.props.url, {ext: this.props.ext, defaultRepresentation: true}) );
  }

  componentWillUnount() {
    this.state.stage.dispose();
  }
  
  render() {
    return (
      <div id="viewport" style={{width: "100%"}}>
        <img src={this.props.loadingImg} id="loading-img" className="Loading-Img" alt="loading" style = {{margin: "auto", display: this.state.url ? "none" : "block" }} />
      </div>
    );
  }
}

export default MoleculeViewer;