import React, { Component } from 'react';

class Twitter extends Component{
    constructor(){
        super()
        this.state= {
         followers: 0,
        }
      }

      render(){
          return(
            <div className="card__sound-list"> 
            <h1>2000</h1>
            <span>followers</span>
            </div>
          )
      }
}

export default Twitter