import React, { Component } from 'react';

class Clock extends Component{
    constructor(){
        super()
        this.state= {
         timeNow: new Date().toLocaleTimeString(),
        }
      }

      render(){

        //not exactly accurate 
        setInterval(()=>{ this.setState({timeNow: new Date().toLocaleTimeString() }) }, 1000)

          return(
            <div className="card">
            <h1> {this.state.timeNow} </h1>
            <span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
            </div>
          )
      }
}

export default Clock