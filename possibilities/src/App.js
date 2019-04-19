import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//styled components import 
import styled from 'styled-components'

//import components
import { Navigation, Footer } from './components/index'

//import views
import HomePage from './views/home' 
import Compare from './views/compare'
import ProteinDisplay from './views/proteinDisplay'
import ProteinResults from './views/resultsProtein'
import SmilesDisplay from './views/smilesDisplay'
import SmilesResults from './views/resultsSmiles'

//import routes and react-router components
import { Route } from 'react-router-dom'

//import rechart items
// import { AreaChart, XAxis, YAxis, ReferenceLine, CartesianGrid, Area, Tooltip } from 'recharts'

let Container = styled.div`
  background-color: #0B5351;
  text-align: center;
  color: white;
`

let PageWrap = styled.div`
  margin: 0 5px;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
                   
        </header> */}
        <PageWrap>
          <Route exact path='/' component={HomePage}/>
          <Route path='/compare' component={Compare}/>
          <Route path='/proteinsearch' component={ProteinResults}/>
          <Route path='/proteincommon' component={ProteinDisplay}/>
          <Route path='/smilesearch' component={SmilesResults}/>
          <Route path='/smilecommon' component={SmilesDisplay}/>
        </PageWrap>
        <Footer />
      </Container>
    );
  }
}

export default App;
