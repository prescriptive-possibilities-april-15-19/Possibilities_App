//display an individual SMILES item
import React from "react";

import styled from 'styled-components'

let Card = styled.div`
  border: 1px solid #4E8099;
  background-color: #4E8098;
  color: white;
  text-align: center;
  word-wrap: break-word;
  width: 175px;
  margin: 5px;
  padding: 10px;
`

const Smile = props => {
  console.log(props)
  return (
    <Card>
      {/* <img src={props.smile.img} alt={`picture of a ${props.smile.color} ${props.smile.name}`}/> */}
      <div>
        <p>{props.smile.lig_id}</p>
        <p>{props.smile.SMILES}</p>
        {/* <p>{props.smile.color}</p>
        <p>{props.compatible.answer}</p>
        either compatible bool or list of proteins its compatible to
        <p>{props.compatible.list}</p>*/}
      </div>
    </Card>
  );
};

export default Smile;