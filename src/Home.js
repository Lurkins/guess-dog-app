import React, { Component } from 'react';
import {
Button,
} from 'reactstrap'; 
import './Home.css';
import { Link } from 'react-router-dom'; 

class Home extends Component {
    constructor(props){
          super(props);
          this.state = {
          };
    }
    render() {
        return (
            <div className="container text-center">
                <div className="d-flex justify-content-center flex-column">
                    <h1 className="header-text mt-5 mb-0">GUESS DOG</h1>
                    <p className="header-descriptor font-weight-light">A dog breed guessing game</p>
                </div>

                <div className="d-flex justify-content-center cta">
                    <div className="mt-4 d-flex justify-content-center align-items-center paw-image">
                        <Button tag={Link} to="/play" className="btn btn-primary cta-btn font-weight-bolder py-3 px-5">PLAY GUESS DOG</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;