//display an individual SMILES item
import React from "react";

const Smile = props => {
  console.log(props)
  return (
    <div>
      <img src={props.smile.img} alt={`picture of a ${props.smile.color} ${props.smile.name}`}/>
      <div>
        <p>{props.smile.name}</p>
        <p>{props.smile.type}</p>
        <p>{props.smile.color}</p>
        <p>{props.compatible.answer}</p>
        {/* either compatible bool or list of proteins its compatible to */}
        <p>{props.compatible.list}</p>
      </div>
    </div>
  );
};

export default Smile;