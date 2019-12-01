import React, { Component } from 'react';
import {
Card,
} from 'reactstrap'; 

class DogCard extends Component {
    constructor(props){
          super(props);
          this.state = {
          };
    }
    render() {
        return (
            <Card>
            <img className="w-100 mb-2 rounded" src={this.props.dogImg} alt={this.props.dogImg} />
            <div className="p-3">
              {this.props.showName ? <h3>{this.props.dogName}</h3> : null}
            </div>   
          </Card>
        );
    }
}

export default DogCard;