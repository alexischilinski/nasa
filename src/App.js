import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header.js'
import {Container} from './components/Container.js'
import Form from './components/Form.js'
import {Footer} from './components/Footer.js'

class App extends Component{

  state = {
    photos: [],
    date: "",
    photo: [],
  }

  componentDidMount(){
    fetch('http://localhost:3000/photos')
      .then(response=>response.json())
      .then(photos=>this.setState({photos}))
  }

  findPhoto = (formatteddate) => {
    return this.state.photos.filter(photo=>{
      return photo.date === formatteddate ? this.setState({photo}) : null
    })
  }

  render(){
    console.log(this.state.showPhoto)
    return (
      <div className="App">
          <Header/>
          <Form findPhoto={this.findPhoto} />
          {this.state.photo.title ? <Container photo={this.state.photo}/> : <Container />}
          <Footer/>
      </div>
    );
  }
}

export default App;
