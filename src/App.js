import React, { Component } from 'react';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const url = 'https://dog.ceo/api/breeds/image/random';


class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      dog_image: '',
      dog_name: '',
		}
  }

  //Account Settings Handlers
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
        });
      }
    })
    .catch(error => {
      console.error('Error updating account info.', error);
    });
  }
  render() {
    return (
      <div className="container w-100">
        <div className="row">
          <div className="col-12">
            <h1 onClick={this.getDog}>Guess what breed!</h1>
            <button className="btn btn-primary" onClick={this.getDog}>Get New Dog</button>
            <h2>{this.state.dog_name}</h2>
            <img className="w-50" src={this.state.image} alt={this.state.dog_name}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
