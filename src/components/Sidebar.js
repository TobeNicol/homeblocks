import React, { Component } from 'react';


class Sidebar extends Component {
  constructor(){
    super()
    this.state = {
      toAdd: [],
    }
}

handleCheck = (e)=>{
  console.log('handling check')
    const item = e.target.value;
    const arr = new Set(this.state.toAdd);
    if(e.target.checked){
        // add item
        arr.add(item)
        this.setState({toAdd:  Array.from(arr)})
        
    }else{
      //remove item
        arr.delete(item)
        this.setState({toAdd: Array.from(arr)})
    }
}



render(){
  return(
    <div className={`${this.props.isShown ? 'show': 'hide'} card__modal-outer`}> 
    <div className="card__modal-inner">

      <h1>Choose blocks</h1>
      {
        this.props.blocks.map(item=>{
        return (
          <div className="card__list-item"> 
          <label>{item.name}</label>
          <input type="checkbox" value={item.id} className="card__modal-input" onClick={this.handleCheck}  />
          </div>
        )

      })
      }
     

      <button  className="card__btn" onClick={ ()=>{ this.props.addBlocks(this.state.toAdd) } } > 
      ADD BLOCK(S)
      </button>
          <button  className="card__btn" onClick={this.props.close}>
          CANCEL
        </button>


 
      </div>
    </div>
  )
}

}

export default Sidebar