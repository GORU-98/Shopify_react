import React from 'react'
import ForthData from "./ForthData"

const FifthPage = () => {
  return (
    <div className='container'>
       <div class="pg6-full">

            <div class="slider"></div>

            <div class="pg6">
                {ForthData.map((card)=>{
                    return <div class="pg6-card">
                    <a href="/DESCpage">{card.title}</a>
                </div>
                })}
                
               
        </div>

    </div>
    </div>
    
  )
}

export default FifthPage
