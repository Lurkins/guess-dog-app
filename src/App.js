import React, { Component } from 'react';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import { ButtonGroup } from 'reactstrap';
import dogSpinner from './dogSpinner.gif';
 

const url = 'https://dog.ceo/api/breeds/image/random';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      dog_image: '',
      dog_name: '',
      isLoading: false,
		}
  }

  showDogName = (event) => {
    console.log('log dog name');
    this.setState({isShowingDogName: true})
    
  }

  //capitalize breed name
capitalize = (breed) => {
  // eslint-disable-next-line
  return breed.replace(/\-/g,' ').split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}

  //fixBreed
  fixBreed = (breed) => {
    if(breed === 'germanshepherd'){
      return 'German Shepherd';
    }else if(breed === 'mexicanhairless'){
      return 'Mexican Hairless';
    }else if(breed === 'stbernard'){
      return 'St. Bernard';
    }else if(breed === "african"){
      return 'African Wild Dog';
    }else if(breed === 'bullterrier'){
      return 'Bull Terier';
    }
    return this.capitalize(breed);
  }

  getDog = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });    
    axios.get(url)
    .then(res => {
      let url = res.data.message;
      // eslint-disable-next-line
      let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
      let breed = regex.exec(url);
      let dog = this.fixBreed(breed[1]);

        this.setState({
          image: res.data.message,
          dog_name: dog,
          isShowingDogName : false,
          isLoading: false,
        });
    })
    .catch(error => {
      console.error('Error getting dog from API.', error);
    });
  }
  render() {
    return (
      <div>
        <Navigation />
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <h1 className="display-4">Guess what dog breed!</h1>
          </div>
          <div className="container">
            <div className="row">
            <div className="col-12">
            <div className="row d-flex justify-content-center">
              <ButtonGroup aria-label="Basic example">
                <button className="btn btn-primary d-block" onClick={this.getDog}>Show Dog</button>
                <button className="btn btn-success d-block" onClick={this.showDogName}>Show Breed</button>
              </ButtonGroup>
            </div>
            </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center m-3 dog-name">
                  {this.state.isShowingDogName ? <h2>{this.state.dog_name}</h2> : null }
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center align-items-center mt-3 dog-box">
                  { this.state.isLoading ? 
                    <img className="d-block mb-5" src={dogSpinner} alt="dog spinner"/>
                    : 
                    <img className="mh-100 mb-5 d-block rounded" src={this.state.image} alt={this.state.dog_name}/> 
                  }
                </div>
              </div>
            </div>
          </div>

        <Footer />
      </div>
    )
  }
}

export default App;
