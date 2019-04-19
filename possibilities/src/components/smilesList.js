//map through the data to make a list of individual smile items
import React from "react";

//import smile component
import { Smile } from "./";

//import links to send the user to individual smile pages using the id
import { Link } from 'react-router-dom'

//import styled components
import styled from 'styled-components'

let Cards = styled.ul`

`

const SmileList = props => {
  console.log(props)
  return (
    <ul>
      {props.smile.map(smile => {
        return <Smile key={smile.id} smile={smile} />;
      })}
    </ul>
  );
};

export default SmileList;