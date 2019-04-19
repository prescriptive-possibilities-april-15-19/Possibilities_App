//map through the data to make a list of individual protein items
import React from "react";

//import protein component
import { Protein } from "./";

//import links to send the user to individual protein pages using the id
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



const ProteinList = props => {
  console.log(props)
  return (
    <CardStack>
      {props.protein.map(protein => {
        return <Protein key={protein.seq_id} protein={protein} />;
      })}
    </CardStack>
  );
};

export default ProteinList;