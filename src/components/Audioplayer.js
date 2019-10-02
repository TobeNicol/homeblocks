import React from 'react';
import Modal from './components/Modal';


class Audioplayer extends Component{
  constructor(){
      super()
      this.state= {
        currentPlaylist: "https://w.soundcloud.com/player/?url=https://soundcloud.com/nicolbuni/sets/indie&auto_play=true",
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
          <div className="card__audio">
             <Modal toggle={this.toggleModal} isShown={this.state.modalShown} changePlaylist = {this.changePlaylist} currentPlaylist={this.state.currentPlaylist}/>
            <iframe scrolling="no" frameborder="no" allow="autoplay"
            src={this.state.currentPlaylist}></iframe>
        <button onClick={this.toggleModal} className="card__btn"> Change playlist </button>

         </div>
        )


    }

}

// const Audioplayer = ({audioUrl})=>{
//   return(
//           <div className="card__audio">
//           <iframe scrolling="no" frameborder="no" allow="autoplay"
//   src={audioUrl}></iframe>
//          </div>
//   )
// }

export default Audioplayer