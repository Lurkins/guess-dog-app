import React, { Component } from 'react';
import {
Card,
} from 'reactstrap'; 

class DogCard extends Component {
    constructor(props){
          super(props);
          this.state = {
            // isShowingCard: false,
          };
    }

    // componentDidUpdate(prevState) {
    //     // if (this.state.isShowingCard !== prevProps.isShowingCard) {
    //     //     this.setState({isShowingCard: true});
    //     // }
    //     this.setState( (prevState) => {
    //         console.log('inSetState', prevState );
    //         if(prevState.) {
    //             console.log('this is showing card');
    //             return {
    //                 isShowingCard: !this.state.isShowingCard
    //             };
    //         }
    //     });
        
    // }
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

// const DogCard = (props) => {
//   return (
//     <Card className={`${props.isShowing ? "show" : "hide"}`}>
//       <img className="w-100 mb-2 rounded" src={props.dogImg} alt={props.dogImg} />
//       <div className="p-3">
//         <h3>{props.dogName}</h3>
//       </div>   
//     </Card>
//   );
// }

export default DogCard;