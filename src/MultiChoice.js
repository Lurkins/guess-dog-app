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
                        <div className="row">
                            <div className="col-6">
                                <div className="w-100 h-100 d-flex justify-content-start align-items-center">
                                    <div className="btn btn-warning reset-btn d-block mb-2" onClick={props.resetScore}>
                                        Reset Score
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="score-text d-flex justify-content-end align-items-center">
                                    <p>Score: {props.currentScore}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                            <p className="text-center font-weight-bolder">Select the dog in the photo.</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-12">
                    <div className="vh-50 d-flex dog-img-bg justify-content-center">
                        <img src={props.correctDog.dogImg} alt={props.correctDog.dogName} className="rounded multichoice-dog " />
                    </div>
                    <div className="answer-area">
                        {(() => {
                            let classes = '';
                            props.answerBlinking ? classes += ' blink-me ' : classes = '';
                            switch(props.correctAnswer) {
                            case true:
                                return <div className={classes += 'text-success display-4 text-center'}>Correct Answer!</div>
                            case false:
                                return <div className={classes += 'text-danger display-4 text-center'}>Wrong! Try Again.</div> 
                            default:
                                return <div className={classes}></div> 
                            }
                        })()}
                    </div>
                    </div>
                    <div className="col-md-6 col-12">
                        {props.dogOptions.map((value, index) => {
                        return (
                            <div 
                                className={props.correctKey === index ? "active btn btn-success my-3 w-100" : "btn btn-secondary my-3 w-100"}
                                key={index}
                                onClick={() => props.checkAnswer(value.dogName, index)}
                            >
                                {value.dogName} 
                            </div>
                        )
                        })}
                        <div 
                            className="btn btn-primary my-3 w-100" 
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