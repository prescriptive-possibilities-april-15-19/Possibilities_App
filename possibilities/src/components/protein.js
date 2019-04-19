//display an individual protein item
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

const Protein = props => {
  console.log(props)
  return (
    <Card>
      {/* <img src={props.protein.img} alt={`picture of a ${props.protein.color} ${props.protein.name}`}/> */}
      <div>
        <p>{props.protein.seq_id}</p>
        <p>{props.protein.sequence}</p>
        {/* <p>{props.protein.color}</p>
        <p>{props.compatible.answer}</p>
          either compatible bool or list of smiles its compatible to 
        <p>{props.compatible.list}</p> */}
      </div>
    </Card>
  );
};

export default Protein;
