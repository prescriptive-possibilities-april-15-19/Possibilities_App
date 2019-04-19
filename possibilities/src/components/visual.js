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
    var stage = new Stage( "viewport", {backgroundColor: "#B1EDE8"} );
      stage.spinAnimation.axis = {x: 0, y: 0.5, z: 1.0};
      // stage.mouseControls.disabled = true;
      stage.mouseControls.clear();
      // stage.animationControls.pause(true);
      stage.setSpin(true);
    stage.loadFile(this.state.url, {ext: this.props.ext})
      .then( o => {
        o.addRepresentation( "cartoon", {color: "skyblue"} );
        o.addRepresentation( "ball+stick", {sele: "protein and (sidechain or .CA)", color: "purple"});
        o.addRepresentation( "licorice", {
            sele: "not protein",
            color: "red",
            radius: 0.5
        });
        o.autoView();
      })
    // this.setState({stage});
  }
  
  render() {
    return (
      <div id="viewport" style={{height: '600px',width: "100%"}}>
        <img src={this.state.loadingImg} id="loading-img" className="Loading-Img" alt="loading" style = {{margin: "auto", display: this.state.url ? "none" : "block" }} />
      </div>
    );
  }
}

export default MoleculeViewer;