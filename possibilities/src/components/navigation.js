import React from 'react'

//import styling and link/navlink components to be used
import styled from 'styled-components'
import './navigation.css'
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
  align-items: center;
`

//dropdown for the search option and the commonly searched option
// let DropDown = styled.div`
// `

// let DropDownItem = styled.a`
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   padding: 12px 16px;
//   z-index: 1;

// `

let Navigation = () => {
  return(
    <NavBar>
      <h1>Perspective Possibilities Application</h1>
      <NavItems>
        <NavLink to='' className='items'>Home</NavLink>
        <div className='items'>
          <h2 className='dropdown'>search
            <ul className='dropdown-items'>
              <li>proteins</li>
              <li>s.m.i.l.e.s.</li>
            </ul>
          </h2>
        </div>
        <div className='items'>
          <h2 className='dropdown'>common searches
            <ul className='dropdown-items'>
              <li>proteins</li>
              <li>s.m.i.l.e.s.</li>
            </ul> 
          </h2>
        </div>
        <NavLink to='' className='items'>About Us</NavLink>
        <NavLink to='' className='items'>Contact Us</NavLink> 

      </NavItems>

    </NavBar>
  )
  
}

export default Navigation