import React from 'react';
import {

} from 'reactstrap'; 
import './MultiChoice.css';

const MultiChoice = (props) => {
    return (
        <div className="vh-90">
            <div className="container my-5">
                <div className="row">
                    <div className="col-6">
                        <div className="w-100 score-text">
                            <p>Score: {props.currentScore}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="w-100 h-100 display-4 d-flex justify-content-end align-items-center">
                            <div className="btn btn-warning d-block mb-2" onClick={props.resetScore}>
                                Reset Score
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-12">
                    <div className="vh-50 d-flex justify-content-center">
                        <img src={props.correctDog.dogImg} alt={props.correctDog.dogName} className="rounded multichoice-dog " />
                    </div>
                    <div className="answer-area">
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
                    </div>
                    </div>
                    <div className="col-md-6 col-12">
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