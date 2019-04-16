import React from 'react'

//import styling and link/navlink components to be used
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

//import connecter for react-redux
import { connect } from 'react-redux'

//this will be a combination of the navigation items and the logo/title that will be used
let NavBar = styled.div`
  display: flex;

`

//this will be just the linked items that will be displayed using a dropdown for each group
let NavItems = styled.nav`
  display: flex;
  justify-content: space-between;
`

let Navigation = () => {
  return(
    <div>
      <h1></h1>
      <nav>
        <a>home</a>
        <ul>
          <li>Search</li>
          <li>proteins</li>
          <li>s.m.i.l.e.s.</li>
        </ul>
        <ul>
          <li>commonly searched</li>
          <li>proteins</li>
          <li>s.m.i.l.e.s.</li>
        </ul> 
        <a>more information(marketing page link)</a>
        <a>contact us(ui side link if they make this page during stretch)</a> 

      </nav>

    </div>
  )
  
}