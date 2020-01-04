import React, { Component } from 'react';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation.js';
// import Footer from './Footer.js';
// import { Container, ButtonGroup, Button, CardColumns } from 'reactstrap';
import MultiChoice from './MultiChoice.js';
import BunchDogs from './BunchDogs.js';
import Home from './Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
 
const url = 'https://dog.ceo/api/breeds/image/random';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
      dogOptions: [],
      isLoadingDogOptionsArray: false,
      correctDog: {},
      correctAnswer: null,
      currentScore: 0,
      dogName: '',
      isLoading: false,
      isShowingDogName : false,
      dogArray: [],
      isLoadingDogArray: false,
      isShowingDogArrayNames: false,
		}
  }

  componentDidMount() {
    axios.get(url)
    .then(res => {
      let url = res.data.message;
      let dog = this.getDogNameFromURL(url);
      this.setState({
        oneDogimage: res.data.message,
        dogName: dog,
      });
    })
    .catch(error => {
      console.error('Error getting dog from API.', error);
    });
    this.getDogOptionsArray();
    this.getDogArray();
  }

  //Get the multiple choice dog array
  getDogOptionsArray = () => {
    this.setState({isLoadingDogOptionsArray: true});
    //Add number of desired dogs to URL and API returns that many dogs
    axios.get(url + '/4')
    .then(res => {
      let newDogArray = res.data.message.map((url) => {
        let dogObj = {};
        let oneDog = this.getDogNameFromURL(url);
        dogObj.dogName = oneDog;
        dogObj.dogImg = url;
        return dogObj;
      });
      const randDog = newDogArray[Math.floor(Math.random()*newDogArray.length)];
      this.setState({
        dogOptions: newDogArray,
        isLoadingDogArray: false,
        correctDog: randDog,
        correctAnswer: null,
      })
    })
    .catch(error => {
      console.error('Error getting dogs from API.', error);
    });
  }

  checkAnswer = (dogName) => {
    if (dogName === this.state.correctDog.dogName) {
      this.setState((prevState) => ({
        currentScore: prevState.currentScore + 1,
        correctAnswer: true,
      }));
      console.log('this is check answer', dogName, 'Match');
    } else {
      console.log('no match');
      this.setState({
        correctAnswer: false,
      });
    }
  }

  resetScore = () => {
    this.setState({
      currentScore: 0,
    });
  }


//Dog array for the cards
  getDogArray = () => {
    this.setState({isLoadingDogArray: true});
    //Add number of desired dogs to URL and API returns that many dogs
    axios.get(url + '/9')
    .then(res => {
      let newDogArray = res.data.message.map((url) => {
        let dogObj = {};
        let oneDog = this.getDogNameFromURL(url);
        dogObj.dogName = oneDog;
        dogObj.dogImg = url;
        return dogObj;
      });
      this.setState({
        dogArray: newDogArray,
        isLoadingDogArray: false,
      });
    })
    .catch(error => {
      console.error('Error getting dogs from API.', error);
    });
  }

  getDogNameFromURL = (url) => {
    // eslint-disable-next-line
    let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
    let breed = regex.exec(url);
    let dog = this.fixBreed(breed[1]);
    return dog;
  }

  showDogName = (event) => {
    event.preventDefault();
    this.setState({isShowingDogName: true})
  }

  //capitalize breed name
  capitalize = (breed) => {
    // eslint-disable-next-line
    return breed.replace(/\-/g,' ').split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
  }

  //Fix the formatting on certain breed names from url
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
    this.setState({ 
      isLoading: true, 
      isShowingDogName: false 
    });    
    axios.get(url)
    .then(res => {
      let url = res.data.message;
      let dog = this.getDogNameFromURL(url);
      this.setState({
        oneDogimage: res.data.message,
        dogName: dog,
        isLoading: false,
      });
    })
    .catch(error => {
      console.error('Error getting dog from API.', error);
    });
  }
  render() {
    return (
      <Router>
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/bunchofdogs">
            <BunchDogs />
          </Route>
          <Route path="/play">
            <MultiChoice 
              dogOptions={this.state.dogOptions} 
              correctDog={this.state.correctDog} 
              checkAnswer={this.checkAnswer} 
              correctAnswer={this.state.correctAnswer}
              getDogOptionsArray={this.getDogOptionsArray}
              currentScore={this.state.currentScore}
              resetScore={this.resetScore}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    )
  }
}

export default App;
