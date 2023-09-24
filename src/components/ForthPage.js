import React from 'react'
import Vdo from './Vdo'
import ForthData from "./ForthData"
const ForthPage = () => {
    
  return (
    <div className='container'>
       <div class="season">
            <h1>Speacial Winter Collection</h1>
            <Vdo/>
            <div class="cardss">
             
             {ForthData.map((card)=>{
                    return <div class="s-cards" style={{backgroundImage:`url(./pics/${card.src})`}}><a href="/DESCpage">{card.title}</a> </div>

             })}
            </div>
        </div>
    </div>
    
  )
}

export default ForthPage
