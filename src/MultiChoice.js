import React from 'react';
import {

} from 'reactstrap'; 

const MultiChoice = (props) => {
    return (
        <div>
            <div>
                <img src={props.correctDog.dogImg} alt={props.correctDog.dogName}/>
            </div>
            {props.dogOptions.map((value, index) => {
              return (
                <div 
                    className="btn btn-secondary m-3" 
                    key={index}
                    onClick={() => props.checkAnswer(value.dogName)}
                >
                {value.dogName} 
                </div>
              )
            })}
        </div>
    
      );
}

export default MultiChoice;