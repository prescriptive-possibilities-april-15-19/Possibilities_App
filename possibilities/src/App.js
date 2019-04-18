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

// const data = [
//   {
//     "name": "Page A",
//     "uv": 4000,
//     "pv": 2400,
//     "amt": 2400
//   },
//   {
//     "name": "Page B",
//     "uv": 3000,
//     "pv": 1398,
//     "amt": 2210
//   },
//   {
//     "name": "Page C",
//     "uv": 2000,
//     "pv": 9800,
//     "amt": 2290
//   },
//   {
//     "name": "Page D",
//     "uv": 2780,
//     "pv": 3908,
//     "amt": 2000
//   },
//   {
//     "name": "Page E",
//     "uv": 1890,
//     "pv": 4800,
//     "amt": 2181
//   },
//   {
//     "name": "Page F",
//     "uv": 2390,
//     "pv": 3800,
//     "amt": 2500
//   },
//   {
//     "name": "Page G",
//     "uv": 3490,
//     "pv": 4300,
//     "amt": 2100
//   }
// ]
  

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route exact path='/' component={HomePage}/>          
        </header>
         
          {/* <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="red" stopOpacity={0.3}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="green" stopOpacity={0.3}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart> */}
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
