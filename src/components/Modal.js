import React, { Component } from 'react';


class Modal extends Component {
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
    <div className={`${this.props.isShown ? 'show': 'hide'} card__modal-outer`}> 
    <div className="card__modal-inner">
      <h1>Enter soundcloud playlist link </h1>
      <input className="card__modal-input" onChange={this.playlistChange}  />
      <button  className="card__btn" onClick={this.setPlaylist}> 
      CHANGE
      </button>
          <button  className="card__btn" onClick={this.props.toggle}>
          CANCEL
           </button>
            </div>
    </div>
  )
}

}

export default Modal