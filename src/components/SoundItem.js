import React, { Component } from 'react';

class SoundItem extends Component {
  constructor(){
    super()
    this.state = {
      isPlaying: false
    }
}



reduceVolume = (e) =>{
  e.target.volume = "0.3";
}

togglePlay = ()=>{
  if(!this.state.isPlaying){
  this.audioBox.play();
     this.setState({isPlaying: true});
  } else{
  
          this.audioBox.pause();
                this.setState({isPlaying: false});
  }
}

render(){
  return(
    <div onClick={this.togglePlay} className={`${this.state.isPlaying ? 'active': 'inactive' } sound`}> 
    <h1 className="sound__name">{this.props.soundObj.name}</h1>
   <img className="sound__icon" src={this.props.soundObj.icon}/>
    <audio src={this.props.soundObj.audio}  ref={element => this.audioBox = element} onLoadStart={this.reduceVolume}  preload="auto" loop>

    </audio>
    </div>
  )
}
}
export default SoundItem