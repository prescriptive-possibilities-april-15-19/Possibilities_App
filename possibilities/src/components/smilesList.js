//map through the data to make a list of individual smile items
import React from "react";

//import smile component
import { Smile } from "./";

//import links to send the user to individual smile pages using the id
import { Link } from 'react-router-dom'

//import styled components
import styled from 'styled-components'

let CardStack = styled.div`
  border: 1px dashed #B1EDE8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const SmileList = props => {
  console.log(props)
  return (
    <CardStack>
      {props.smile.map(smile => {
        return <Smile key={smile.id} smile={smile} />;
      })}
    </CardStack>
  );
};

export default SmileList;