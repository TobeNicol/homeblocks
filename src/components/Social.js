import React, { Component } from 'react';

class Social extends Component{
    constructor(){
        super()
        this.state= {
         followers: 0,
        }
      }

      render(){
          return(
            <div className="card"> 
             {/* <button onClick={this.toggleModal} className="card__btn"> Edit ✎ </button> */}
            <h1>2000</h1>
            <span>followers</span>
            </div>
          )
      }
}

export default Social