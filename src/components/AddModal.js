import React, { Component } from 'react';


class AddModal extends Component {
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
    <div className={`${this.props.isShown ? 'show': 'hide'} modal`}> 
    
    <div className="modal__inner">

      <h1>Edit blocks +</h1>
      {
        this.props.blocks.map(item=>{
        return (
          <div className="modal__list-item"> 
          <label for={item.id}>☰ {item.name}</label>
          <input id={item.id} type="checkbox" value={item.id} className="modal__checkbox" onClick={this.handleCheck}  />
          </div>
        )

      })
      }
     

      <button  className="modal__btn" onClick={ ()=>{ 
        console.log('I should add blocks');
        this.props.addBlocks(this.state.toAdd); 
        this.props.close('addModal'); 
         } } > 
      ADD BLOCK(S)
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