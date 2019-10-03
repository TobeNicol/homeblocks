import React, { Component } from 'react';
import AudioModal from './AudioModal';


class Audioplayer extends Component{
  constructor(){
      super()
      this.state= {
        currentPlaylist: "https://w.soundcloud.com/player/?url=https://soundcloud.com/scifilofifan/sets/indie&auto_play=true",
        modalShown: false,
      }
    }

    toggleModal = ()=>{
      this.state.modalShown ? this.setState({modalShown:false}): this.setState({modalShown:true});
    }
    changePlaylist = (val)=>{
      this.setState({currentPlaylist: val })
    }
  

    render(){
        return(
          <div className="card">
             <button onClick={this.toggleModal} className="card__btn"> Edit ✎ </button>
             <AudioModal toggle={this.toggleModal} isShown={this.state.modalShown} changePlaylist = {this.changePlaylist} currentPlaylist={this.state.currentPlaylist}/>
            <iframe scrolling="no" frameborder="no" allow="autoplay"
            src={this.state.currentPlaylist}></iframe>
       

         </div>
        )


    }

}



export default Audioplayer