import React from 'react';


const Audioplayer = ({audioUrl})=>{
  return(
          <div className="card__audio">
          <iframe scrolling="no" frameborder="no" allow="autoplay"
  src={audioUrl}></iframe>
         </div>
  )
}

export default Audioplayer