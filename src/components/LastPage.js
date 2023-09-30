import React from 'react'
import Vdo from './Vdo'

const LastPage = () => {
  return (
    <div class="container">
    <div class="fdiv">
     {/* <video autoPlay muted loop id="myVideo">
    <source src="./video/Cartoon - 137471.mp4" type="video/mp4"/>
    </video> */}
    <Vdo src="./video/Cartoon - 137471.mp4"/>
    
    <div class="nm">
        <h1>PANCHAL INDUSTRIES</h1>
        <h2>Your response has been submitted.It will be proceed soon.</h2>
    </div>
    
        <div class="btn">
        <button><a href="/">Return To <span>Home</span></a></button>
        <button className='btn2'><a href="/Shop">Explore More Categories</a></button>
        </div>
</div> 

</div>
  )
}

export default LastPage
