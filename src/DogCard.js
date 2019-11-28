import React from 'react';
import {
Card,
} from 'reactstrap'; 

const DogCard = (props) => {

    
  return (
    <Card >
      <img className="w-100 mb-2 rounded" src={props.dogImg} alt={props.dogImg} />
      <div className="p-3">
        <h3>{props.dogName}</h3>
        <p>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </p>
      </div>   
    </Card>
  );
}

export default DogCard;