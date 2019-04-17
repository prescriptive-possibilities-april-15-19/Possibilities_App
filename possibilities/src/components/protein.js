//display an individual protein item
import React from "react";

const Protein = props => {
  console.log(props)
  return (
    <div>
      <img src={props.protein.img} alt={`picture of a ${props.protein.color} ${props.protein.name}`}/>
      <div>
        <p>{props.protein.name}</p>
        <p>{props.protein.type}</p>
        <p>{props.protein.color}</p>
        <p>{props.compatible.answer}</p>
        {/* either compatible bool or list of smiles its compatible to */}
        <p>{props.compatible.list}</p>
      </div>
    </div>
  );
};

export default Protein;
