import React from 'react';
import {
    Container, ButtonGroup, Button, CardColumns
} from 'reactstrap'; 
import dogSpinner from './dogSpinner.gif';
import DogCard from './DogCard.js';
import './BunchDogs.css';

const BunchDogs = (props) => {
    return (
        <Container fluid={true}>
            <h1>Just a bunch of dogs.</h1>
            <p>Quiz yourself.</p>
        <hr/>
        <ButtonGroup className="btn-group my-5" aria-label="dog button group">
          <Button className="btn btn-info" onClick={props.getDogArray}>
            Refresh Dogs
          </Button>
          <Button 
            className="btn btn-warning" 
            onClick={props.showDogNames}
          >
            {props.isShowingDogArrayNames ? "Hide Dog Names" : "Show Dog Names"}
          </Button>
        </ButtonGroup>
        <div className="h-100">
        {
          props.isLoadingDogArray ? 
          <div className="d-flex justify-content-center">
          <img className="d-block mb-5" 
          src={dogSpinner} 
          alt="dog spinner"
          />
          </div>
          :             
          <CardColumns>
          {props.dogArray.map((value, index) => {
            return (
              <DogCard 
                key={index} 
                dogImg={value.dogImg} 
                dogName={value.dogName}
                showName={props.isShowingDogArrayNames}
              />
            )
          })}
        </CardColumns>
        }
        </div>
        </Container>
    );
}

export default BunchDogs;