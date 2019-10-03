import React, { Component } from 'react';


class AudioModal extends Component {
  constructor(){
    super()
    this.state = {
      playlistUrl: "",
    }
}

playlistChange = (e) =>{
 this.setState({playlistUrl: e.target.value})
}

setPlaylist =  ()=>{
  if(this.state.playlistUrl){
  const value = this.state.playlistUrl;
  const str = `https://w.soundcloud.com/player/?url=${value}&auto_play=true`
   this.props.changePlaylist(str);
   this.props.toggle()
  }else{
       this.props.toggle()
  }

}
render(){
  return(
    <div className={`${this.props.isShown ? 'show': 'hide'} modal`}> 
    <div className="modal__inner">
      <h1>Enter soundcloud playlist link </h1>
      <input className="modal__input" onChange={this.playlistChange}  />
      <button  className="modal__btn" onClick={this.setPlaylist}> 
      CHANGE
      </button>
          <button  className="modal__btn" onClick={this.props.toggle}>
          CANCEL
           </button>
            </div>
    </div>
  )
}

}

export default AudioModal