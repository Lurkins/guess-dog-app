import React, { Component } from 'react';
import {

} from 'reactstrap'; 
import './Home.css'; 

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
                    <h1 className="mt-5">Guess Dog</h1>
                    <p>A dog breed guessing game</p>
                </div>

                <div className="d-flex justify-content-center cta">
                    <div className="mt-4 d-flex justify-content-center align-items-center paw-image">
                        <div className="btn btn-primary cta-btn font-weight-bolder py-3 px-5">PLAY GUESS DOG</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;