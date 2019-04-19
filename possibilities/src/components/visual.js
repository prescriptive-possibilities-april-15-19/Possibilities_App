
// // // Create NGL Stage object
// // var stage = new NGL.Stage( "viewport" );

// // // Handle window resizing



// // // Load PDB entry 1CRN
// // stage.loadFile( "rcsb://1crn", { defaultRepresentation: true } );


// import React, { Component } from 'react';
// import { Stage } from 'ngl';

// class MoleculeViewer extends Component {  
//   constructor(props) {
//     super(props);
//     this.state = {
//       stage: new Stage("viewport")
//     }
//   }

//   componentDidMount() {
//     this.state.stage.loadFile( "rcsb://1crn", { defaultRepresentation: true });
//     window.addEventListener( "resize", function( event ){
//       this.state.stage.handleResize();
//     }, false );
//   }
  
//   render() {
//     return (
//       <div id="viewport" style={{width: "100%"}}>
//      </div>
//     );
//   }
// }

// export default MoleculeViewer;


import React, { Component } from 'react';
import { Stage } from 'ngl';

class MoleculeViewer extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      stage: null,
      url: this.props.url,
      ext: this.props.ext,
      loadingImg: this.props.loadingImg
    }
  }

  componentDidMount() {
    var stage = new Stage("viewport");
    setTimeout( () => stage.loadFile(this.props.url, {ext: this.props.ext, defaultRepresentation: true}) );
    this.setState({stage});
  }

  componentWillUnmount() {
    this.state.stage.dispose();
  }
  
  render() {
    return (
      <div id="viewport" style={{width: "100%"}}>
        <img src={this.state.loadingImg} id="loading-img" className="Loading-Img" alt="loading" style = {{margin: "auto", display: this.state.url ? "none" : "block" }} />
      </div>
    );
  }
}

export default MoleculeViewer;