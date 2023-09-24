import React from 'react'

const LastPage = () => {
  return (
    <div class="container">
    <div class="fdiv">
     <video autoPlay muted loop id="myVideo">
    <source src="./video/Cartoon - 137471.mp4" type="video/mp4"/>
    </video>
    <div class="nm">
        <h1>PANCHAL INDUSTRIES</h1>
        <h2>Your response has been submitted.It will be proceed soon.</h2>
    </div>
    
        <div class="btn">
        <button><a href="/Fpage">Return To <span>Home</span></a></button>
        <button className='btn2'><a href="/THIpage">Explore More Categories</a></button>
        </div>
</div> 

</div>
  )
}

export default LastPage
