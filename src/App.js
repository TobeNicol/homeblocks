import React, { Component } from 'react';
import './App.css';
import {sounds } from './sounds'
import Header from './components/Header';
import Audioplayer from './components/Audioplayer';
import Sounds from './components/Sounds';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Twitter from './components/Twitter';
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
          element: <Twitter/>,
          name: 'Twitter Followers'
        }, 
   ],
     shownBlocks: [],
     sidebarShown: false,
    }
  }
  
toggleSidebar = ()=>{
  console.log('toggling sidebar')
  //show sidebar
  this.setState({sidebarShown: this.state.sidebarShown ? false: true })
}

addBlocks = (arr)=>{
  console.log('adding block', arr)
  const elArr = this.state.blocks.filter((item)=> arr.includes(String(item.id)))
  if(arr.length > 0) this.setState({shownBlocks:  elArr});
  this.toggleSidebar();
}

deleteElement = ()=>{

}
//TODO - Need to initialize empty array for chrome storage
//TODO - Refactor to use id's only in shownBlocks
componentDidMount(){

window.chrome.storage.local.get(['shownBlocks'], (obj)=>{
    const elArr = this.state.blocks.filter((item)=>obj.shownBlocks.includes(item.id))
    this.setState({shownBlocks: elArr})
  
})

}

componentDidUpdate(_, prevState) {
  // Check if shownBlocks state is different
  console.log('did update')
  if (this.state.shownBlocks.toString() !== prevState.shownBlocks.toString()) {

      window.chrome.storage.local.set({shownBlocks: this.state.shownBlocks}, ()=>{
      console.log('added new data')
      })
  }
}

render() {
    let isInit = this.state.shownBlocks.length;
    if(isInit){
        return(
          <div className="App">
          <div className="card">
          {
            this.state.shownBlocks.map(block=>{
            return block.element;
          })
          }
          </div>
          </div>
        )
    }else{
      return (
        <div className="App">
        <Sidebar addBlocks={this.addBlocks} blocks={this.state.blocks} isShown={this.state.sidebarShown} close={this.toggleSidebar}/>
        {/* <div className="card"> */}
        <button onClick={this.toggleSidebar}>ADD BLOCK</button>
        {/* </div> */}
        </div>
      )
    }

  }
}

export default App;
