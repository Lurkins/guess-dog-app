import React from 'react';
import {

} from 'reactstrap'; 

const MultiChoice = (props) => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-6">
                <div>
                    <img src={props.correctDog.dogImg} alt={props.correctDog.dogName} className="w-100" />
                </div>
                </div>
                <div className="col-6">
                {props.dogOptions.map((value, index) => {
                return (
                    <div 
                        className="btn btn-primary m-3" 
                        key={index}
                        onClick={() => props.checkAnswer(value.dogName)}
                    >
                    {value.dogName} 
                    </div>
                )
                })}
                </div>
            </div>
        </div>
    
      );
}

export default MultiChoice;