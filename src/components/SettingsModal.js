import React, { Component } from 'react';


class AddModal extends Component {
  constructor(){
    super()
    this.state = {
    backgroundUrl: '',
      
    }
}


handleUrl = (e)=>{
    this.setState({backgroundUrl: e.target.value}) 
}

saveSettings = ()=>{
  
  if(this.props.backgroundUrl !== this.state.backgroundUrl.trim() ){
   this.props.changeBg(this.state.backgroundUrl);
   this.props.close('settingsModal')
  }
}

render(){
  return(
    <div className={`${this.props.isShown ? 'show': 'hide'} modal`}> 
    
    <div className="modal__inner">

      <h1>Settings ⚙</h1>
          <div className="modal__list-item"> 
          <label for="background-url">Change background: (Add url)</label>
          <input id="background-url"type="text" placeholder="Url to image" className="modal__input" onClick={this.handleUrl}  />
          </div>
     
     

      <button  className="modal__btn" onClick={this.state.saveSettings} > 
      SAVE
      </button>
          <button  className="modal__btn" onClick={this.props.close}>
          CANCEL
        </button>


 
      </div>
    </div>
  )
}

}

export default AddModal