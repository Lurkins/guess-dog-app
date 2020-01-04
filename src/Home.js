import React, { Component } from 'react';
import Paw from './home-paw.jpg';
import {

} from 'reactstrap'; 
import './Home.css'; 

// var pawImage = {
//     backgroundImage: `url(${Paw})`
//  }

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
                    <h1>Guess Dog</h1>
                    <p>Something match dogs something</p>
                </div>

                <div className="d-flex justify-content-center cta">
                    <div className="mt-5 d-flex justify-content-center align-items-center paw-image">
                        <div className="btn cta-btn px-5">Play Guess Dog</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;