import React, { Component } from 'react';
import GoalsModal from './GoalsModal';

class Goals extends Component{
    constructor(){
        super()
        this.state= {
         goals: [],
         modalShown: false,
        }
      }

      toggleModal = ()=>{
        this.state.modalShown ? this.setState({modalShown:false}): this.setState({modalShown:true});
      }

      addGoals = (arr)=>{
        this.setState({goals: arr})
      }
      
      componentDidUpdate(_, prevState){
        //if goal string 
      }

      render(){
          return(
            <div className="card"> 
              <button onClick={this.toggleModal} className="card__btn"> Edit ✎ </button>
              <GoalsModal toggle={this.toggleModal} isShown={this.state.modalShown} addGoals={this.addGoals}/>
            <h1>GOALS</h1>
            {this.state.goals.map(goal=>{
              return <p>- {goal}</p>
            })}
            </div>
          )
      }
}

export default Goals