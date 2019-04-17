//map through the data to make a list of individual protein items
import React from "react";

//import protein component
import { Protein } from "./";

//import links to send the user to individual protein pages using the id
import { Link } from 'react-router-dom'

//import styled components
import styled from 'styled-components'



const ProteinList = props => {
  console.log(props)
  return (
    <ul>
      {props.proteins.map(protein => {
        return <Protein key={protein.id} protein={protein} />;
      })}
    </ul>
  );
};

export default ProteinList;