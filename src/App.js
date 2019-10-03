import React, { Component } from 'react';
import './App.css';
// import {sounds } from './sounds'
import Audioplayer from './components/Audioplayer';
import Sounds from './components/Sounds';
import Footer from './components/Footer';
import SettingsModal from './components/SettingsModal'; 
import AddModal from './components/AddModal';
import Social from './components/Social';
import Clock from './components/Clock';

class App extends Component {
  constructor(){
    super()
    this.state={
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
        {
          id:4,
          element: <Social/>,
          name: 'Social Followers'
        }, 
   ],
     shownBlocks: [],
     addModal: false,
     settingsModal: false,
    //  settingsModalShown: false,
     backgroundUrl: 'https://images.unsplash.com/photo-1531278520962-fcf47a2faea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
    }
  }

changeBackground = (url)=>{
  //show sidebar
  this.setState({backgroundUrl: url})
}
  
toggleModal = (type)=>{
  console.log('toggling sidebar')
  //show modal
  this.setState({[type]: this.state[type] ? false: true })
}
addBlocks = (arr)=>{
  console.log('adding block', arr)
  // const elArr = this.state.blocks.filter((item)=> arr.includes(String(item.id)))
  if(arr.length > 0) this.setState({shownBlocks: arr});

}

deleteElement = ()=>{

}
//TODO - Need to initialize empty array for chrome storage
//TODO - Refactor to use id's only in shownBlocks
componentDidMount(){

window.chrome.storage.local.get(['shownBlocks', 'backgroundUrl'], (obj)=>{
    // const elArr = this.state.blocks.filter((item)=>obj.shownBlocks.includes(item.id))
    this.setState({shownBlocks: obj.shownBlocks, backgroundUrl:obj.backgroundUrl})
  
})

}

componentDidUpdate(_, prevState) {

  const notChanged = prevState.shownBlocks.every(function(val) {
      return this.state.shownBlocks.includes(val);
    });

  if (!notChanged) {
      window.chrome.storage.local.set({shownBlocks: this.state.shownBlocks}, ()=>{
      console.log('added new data')
      })
  }
  if(prevState.backgroundUrl !== this.state.backgroundUrl){
    window.chrome.storage.local.set({backgroundUrl: this.state.backgroundUrl}, ()=>{
      console.log('added new background')
      })
  }
}

render() {
    // let isInit = this.state.shownBlocks.length;
    const elArr = this.state.blocks.filter((item)=>this.state.shownBlocks.includes(item.id));
    if( elArr.length){
        return(
          <div className="App">
          <SettingsModal changeBg={this.changeBackground} backgroundUrl={this.state.backgroundUrl} isShown={this.state.settingsModal} close={this.toggleModal}/>

          <AddModal addBlocks={this.addBlocks} blocks={this.state.blocks} isShown={this.state.addModal} close={this.toggleModal}/>
          <button className="addblock-btn-2" onClick={()=>{this.toggleModal('settingsModal') } }> SETTINGS ⚙</button>

          <button className="addblock-btn-2" onClick={()=>{this.toggleModal('addModal') } }> EDIT ✎</button>
          {
            elArr.map(block=>{
            return block.element;
          })
          }
      
          </div>
        )
    }else{
      return (
        <div style={ {backgroundImage:  `url(${this.state.backgroundUrl})` }  } className="App">
        <SettingsModal changeBg={this.changeBackground} backgroundUrl={this.state.backgroundUrl} isShown={this.state.settingsModal} close={this.toggleModal}/>

        <AddModal addBlocks={this.addBlocks} blocks={this.state.blocks} isShown={this.state.addModal} close={this.toggleModal}/>
        {/* <div className="card"> */}
        <button className="addblock-btn" onClick={ ()=>{this.toggleModal('addModal')  } }>ADD BLOCK +</button>
        {/* </div> */}
        </div>
      )
    }

  }
}

export default App;
