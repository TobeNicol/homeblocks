import React, { Component } from 'react';


class GoalsModal extends Component {
  constructor(){
    super()
    this.state = {
      goalString: '',
    }
}

handleGoal = (e)=>{
  this.setState({goalString: e.target.value.trim()})
}

render(){
  return(
    <div className={`${this.props.isShown ? 'show': 'hide'} modal`}> 
    
    <div className="modal__inner">

      <h1>Write Goals (Separate with comma) +</h1>
          <textarea onChange={this.handleGoal} className="modal__list-item"> 

          </textarea>

     

      <button  className="modal__btn" onClick={ ()=>{ 
        this.props.addGoals(this.state.goalString.split(',')); 
        this.props.toggle(); 
         } } > 
      ADD BLOCK(S)
      </button>
          <button  className="modal__btn" onClick={   this.props.toggle }>
          CANCEL
        </button>


 
      </div>
    </div>
  )
}

}

export default GoalsModal