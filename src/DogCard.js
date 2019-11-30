import React, { useState, useEffect } from 'react';
import {
Card,
} from 'reactstrap'; 

const DogCard = (props) => {
  const [cssClass, setClass] = useState(true);
  useEffect(() => {
      console.log(setClass);
  }, [cssClass]);
  return (
    <Card className={`${cssClass ? "show" : "hide"}`}>
      <img className="w-100 mb-2 rounded" src={props.dogImg} alt={props.dogImg} />
      <div className="p-3">
        <h3>{props.dogName}</h3>
        {/* <p>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </p> */}
      </div>   
    </Card>
  );
}

export default DogCard;