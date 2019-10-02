import React, { Component } from 'react';
import './App.css';
import {sounds } from './sounds'
import Header from './components/Header';
import Audioplayer from './components/Audioplayer';
import Sounds from './components/Sounds';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Clock from './components/Clock';

class App extends Component {
  constructor(){
    super()
    this.state={
    //  currentPlaylist: "https://w.soundcloud.com/player/?url=https://soundcloud.com/nicolbuni/sets/indie&auto_play=true",
    //  audio: sounds,
    //  modalShown: false,
     blocks: [
        {
          id: 1,
          element: <Clock/>,
          name: 'Clock'
        }, 
        {
          id:2,
          element:  <Sounds/>,
          name: 'Ambient Sounds'
        }, 
        {
          id:3,
          element: <Audioplayer/>,
          name: 'Audioplayer'
        }, 
   ],
     shownBlocks: [],
    }
  }

addElement = ()=>{
  //save shown block to storage

}
//TODO - Need to initialize empty array for chrome storage
componentDidMount(){

window.chrome.storage.local.get(['shownBlocks'], (obj)=>{
  if(obj.shownBlocks.length === 0){
      this.setState({shownBlocks: [{
        element: <StartMessage/>
      }]
      })
  }
})  
}

render() {

    return (
      <div className="App">
        <div className="card">
        {
          this.state.shownBlocks.map(block=>{
          return block.element;
        })
        }

      {/* <Header/> */}
     
      {/* <Audioplayer audioUrl={this.state.currentPlaylist} /> */}
      {/* <button onClick={this.toggleModal} className="card__btn"> Change playlist </button> */}

        {/* <div className="card__sound-list"> 
        { this.state.audio.map(sound=> {
          return <SoundItem soundObj={sound}/>
          }) }
        </div> */}


         </div>
         <Footer/>
      </div>
    );
  }
}

export default App;
