import React from 'react'
import Vdo from './Vdo'
const WelcomePage = () => {
  return (
    <div class="container">

        <div class="fdiv">

        <Vdo src="./video/Business - 138076.mp4"/>

        <div class="nm">
            <h1>PANCHAL INDUSTRIES</h1>
            <h2>Welcome To Our Online Store-Start Your Shopping Now </h2>
        </div>

        <div class="btn">
            <button><a href="/Fpage">Go To <span>Home</span></a></button>
            <button className='btn2'><a href="/THIpage">Explore More Categories</a></button>
        </div>
</div> 
    
    </div>
  )
}

export default WelcomePage
