import React, { Component } from 'react';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import { Spinner } from 'reactstrap';
 

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

  getDog = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });    
    axios.get(url)
    .then(res => {
      var breed = res.data.message.substring(
        res.data.message.lastIndexOf("s/") + 2, 
        res.data.message.lastIndexOf("/")
      );
      if(breed === '/') {
        this.setState({
          image: res.data.message,
          dog_name: 'breed unavailable',
          isLoading: false,
        });
      } else {
        this.setState({
          image: res.data.message,
          dog_name: breed,
          isShowingDogName : false,
          isLoading: false,
        });
      }
    })
    .catch(error => {
      console.error('Error updating account info.', error);
    });
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid bg-info header">
          <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="display-5" onClick={this.getDog}>Guess what breed!</h1>
              <div class="d-flex justify-content-center align-items-center h-100">
                { this.state.isLoading ? 
                  <Spinner animation="grow" variant="info" /> 
                  : 
                  <img className="w-100" src={this.state.image} alt={this.state.dog_name}/> 
                }
              </div>
            </div>
            <div className="col-6">
            <button className="btn btn-primary" onClick={this.getDog}>Get New Dog</button>
              <button className="btn btn-success" onClick={this.showDogName}>Show Breed Name</button>
              {this.state.isShowingDogName ? <h2>{this.state.dog_name}</h2> : null }
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
