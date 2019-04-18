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
  justify-content: space-between;
  font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;
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
        <NavLink to='/' className='items'>Home</NavLink>
        <div className='items'>
          <ul className='dropdown'>search
            <ul className='dropdown-items'>
              <li><NavLink to='' className='nav'>proteins</NavLink></li>
              <li><NavLink to='' className='nav'>s.m.i.l.e.s.</NavLink></li>
            </ul>
          </ul>
        </div>
        <div className='items'>
          <ul className='dropdown'>common searches
            <ul className='dropdown-items'>
              <li><NavLink to='' className='nav'>proteins</NavLink></li>
              <li><NavLink to='' className='nav'>s.m.i.l.e.s.</NavLink></li>
            </ul> 
          </ul>
        </div>
        <NavLink to='' className='items'>Compare</NavLink>
        <a href='https://prescriptiveposshp.netlify.com/aboutteam.html' className='items'>About Us</a>
        <a href='https://perscriptivepossibilities.netlify.com/' className='items'>More Info</a> 
      </NavItems>

    </NavBar>
  )
  
}

export default Navigation