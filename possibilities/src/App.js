import React, { Component } from 'react';
import logo from './logo.svg';
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
import { AreaChart, XAxis, YAxis, ReferenceLine, CartesianGrid, Area, Tooltip } from 'recharts'

let Container = styled.div`
  margin: 0 5px;
  

`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route exact path='/' component={HomePage}/>          
        </header>
        <div>
          <Route path='/compare' component={Compare}/>
          <Route path='/proteinsearch' component={ProteinResults}/>
          <Route path='/proteincommon' component={ProteinDisplay}/>
          <Route path='/smilesearch' component={SmilesResults}/>
          <Route path='/smilecommon' component={SmilesDisplay}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
