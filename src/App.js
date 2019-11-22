import React, { Component } from 'react';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation.js';
import Footer from './Footer.js';

const url = 'https://dog.ceo/api/breeds/image/random';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      dog_image: '',
      dog_name: '',
		}
  }

  showDogName = (event) => {
    console.log('log dog name');
    this.setState({isShowingDogName: true})
    
  }

  getDog = (event) => {
    event.preventDefault();    
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
        });
      } else {
        this.setState({
          image: res.data.message,
          dog_name: breed,
          isShowingDogName : false,
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
            <div className="col-12">
              <h1 className="display-5" onClick={this.getDog}>Guess what breed!</h1>
              <button className="btn btn-primary" onClick={this.getDog}>Get New Dog</button>
              <button className="btn btn-success" onClick={this.showDogName}>Show Breed Name</button>
              {this.state.isShowingDogName ? <h2>{this.state.dog_name}</h2> : null }
              <img className="l-100" src={this.state.image} alt={this.state.dog_name}/>
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
