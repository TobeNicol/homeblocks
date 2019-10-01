import React, { Component } from 'react';
import './App.css';
import {sounds } from './sounds'
import Header from './components/Header';
import Audioplayer from './components/Audioplayer';
import SoundItem from './components/SoundItem';
import Footer from './components/Footer';
import Modal from './components/Modal';

class App extends Component {
  constructor(){
    super()
    this.state={
     currentPlaylist: "https://w.soundcloud.com/player/?url=https://soundcloud.com/nicolbuni/sets/indie&auto_play=true",
     audio: sounds,
     modalShown: false
    }
  }

  toggleModal = ()=>{
    this.state.modalShown ? this.setState({modalShown:false}): this.setState({modalShown:true});
  }

  changePlaylist = (val)=>{
    this.setState({currentPlaylist: val })
  }

  render() {
    return (
      <div className="App">
        <div className="card">
      <Header/>
      <Modal toggle={this.toggleModal} isShown={this.state.modalShown} changePlaylist = {this.changePlaylist} currentPlaylist={this.state.currentPlaylist}/>
      <Audioplayer audioUrl={this.state.currentPlaylist} />
      <button onClick={this.toggleModal} className="card__btn"> Change playlist </button>

        <div className="card__sound-list"> 
        { this.state.audio.map(sound=> {
          return <SoundItem soundObj={sound}/>
          }) }
        </div>


         </div>
         <Footer/>
      </div>
    );
  }
}

export default App;
