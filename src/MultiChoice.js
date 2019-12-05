import React from 'react';
import {

} from 'reactstrap'; 

const MultiChoice = (props) => {
    return (
        <div className="mt-5 vh-25">
        
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-12">
                <div className="h-50">
                    <img src={props.correctDog.dogImg} alt={props.correctDog.dogName} className="w-100 rounded" />
                </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="row">
                        <div className="col-6">
                        {(() => {
                        switch(props.correctAnswer) {
                        case true:
                            return <div className="text-success display-4 text-center">Correct Answer!</div>
                        case false:
                            return <div className="text-danger display-4 text-center">Wrong Answer!</div> 
                        default:
                            return <div className="text-danger display-4"></div> 
                        }
                    })()}
                            <div className="w-100 display-4">
                                <p>Score: {props.currentScore}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="w-100 h-100 display-4 d-flex justify-content-center align-items-center">
                                <div className="btn btn-warning d-block" onClick={props.resetScore}>
                                    Reset Score
                                </div>
                            </div>
                        </div>
                    </div>
                    {props.dogOptions.map((value, index) => {
                    return (
                        <div 
                            className="btn btn-primary my-1 w-100" 
                            key={index}
                            onClick={() => props.checkAnswer(value.dogName)}
                        >
                            {value.dogName} 
                        </div>
                    )
                    })}
                    <div 
                        className="btn btn-success my-3 w-100" 
                        onClick={props.getDogOptionsArray}
                    >
                        NEXT DOG
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MultiChoice;