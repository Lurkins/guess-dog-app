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
        <hr/>
        <ButtonGroup className="btn-group my-5" aria-label="dog button group">
          <Button className="btn btn-info" onClick={this.getDogArray}>
            Refresh Dogs
          </Button>
          <Button 
            className="btn btn-warning" 
            onClick={() => this.setState({isShowingDogArrayNames: !this.state.isShowingDogArrayNames})}
          >
            {this.state.isShowingDogArrayNames ? "Hide Dog Names" : "Show Dog Names"}
          </Button>
        </ButtonGroup>
        <div className="h-100">
        {
          this.state.isLoadingDogArray ? 
          <div className="d-flex justify-content-center">
          <img className="d-block mb-5" 
          src={dogSpinner} 
          alt="dog spinner"
          />
          </div>
          :             
          <CardColumns>
          {this.state.dogArray.map((value, index) => {
            return (
              <DogCard 
                key={index} 
                dogImg={value.dogImg} 
                dogName={value.dogName}
                showName={this.state.isShowingDogArrayNames}
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