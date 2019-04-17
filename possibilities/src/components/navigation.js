import React from 'react'

//import styling and link/navlink components to be used
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

//this will be a combination of the navigation items and the logo/title that will be used
let NavBar = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #00A9A5;
  background-color: #092327;
  color: #B1EDE8;
`

//this will be just the linked items that will be displayed using a dropdown for each group
let NavItems = styled.nav`
  display: flex;
  justify-content: space-between;
`

//dropdown for the search option and the commonly searched option
let DropDown = styled.div`
`

let DropDownItem = styled.a`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;

`

let Navigation = () => {
  return(
    <NavBar>
      <h1>Perspective Possibilities Application</h1>
      <NavItems>
        <NavLink to=''>home</NavLink>
        <div>
          <h2>search</h2>
          <ul>
            <li>proteins</li>
            <li>s.m.i.l.e.s.</li>
          </ul>
        </div>
        <div>
          <h2>common searches</h2>
          <ul>
            <li>proteins</li>
            <li>s.m.i.l.e.s.</li>
          </ul> 
        </div>
        <NavLink to=''>more information(marketing page link)</NavLink>
        <NavLink to=''>contact us(ui side link if they make this page during stretch)</NavLink> 

      </NavItems>

    </NavBar>
  )
  
}

export default Navigation