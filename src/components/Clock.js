import React, { Component } from 'react';

class Clock extends Component{
    constructor(){
        super()
        this.state= {
         followers: 0,
        }
      }

      render(){
          return(
            <div className="card">
            <h1>20:00</h1>
            <span>Muscat</span>
            </div>
          )
      }
}

export default Clock