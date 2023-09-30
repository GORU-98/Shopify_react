import React from 'react'
import Vdo from './Vdo'
import ForthData from "./ForthData"
const ForthPage = () => {
    
  return (
    <div className='container'>
      <Vdo src="./video/Kid - 135875.mp4"/>
       <div class="season">
            <h1>Special Winter Collection</h1>
            <Vdo/>
            <div class="cardss">
             
             {ForthData.map((card)=>{
                    return <div class="s-cards" style={{backgroundImage:`url(./pics/${card.src})`}}><a href="/Shop">{card.category}</a>  </div>

             })}
            </div>
        </div>
    </div>
    
  )
}

export default ForthPage
