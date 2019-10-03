import React, { Component } from 'react';
//possible import error here
import {sounds } from '../sounds'
import SoundItem from './SoundItem';

class Sounds extends Component{
    constructor(){
        super()
        this.state= {
         audio: sounds,
        }
      }

      render(){
          return(
            <div className="card card__sound-list"> 
            { this.state.audio.map(sound=> {
                return <SoundItem soundObj={sound}/>
                }) }
            </div>
          )
      }
}

export default Sounds