import React from 'react'

const Payment = () => {
  return (
    <div className='container'>
       <video autoPlay muted loop id="myVideo">
        <source src="./video/Man - 119854.mp4" type="video/mp4"/>
        </video>
        <div class="fdiv">
            <h1>SELECT PAYMENT METHOD </h1>
        
        <div class="nm5">
            <div class="div1">
                <input type="radio" value="Male" name="gender" id="Male"  required disabled /> 
                <label for="Male">DEBIT CARD <span>(currently unavilable)</span> </label>
            </div>
            <div class="div2">
                <input type="radio" value="Female" name="gender" id="feMale" required disabled />
                <label for="female">CREDIT CARD<span>(currently unavilable)</span></label>
            </div>
            <div class="div3">
                <input type="radio" value="Female" name="gender" id="feMale1" required disabled />
                <label for="female">INTERNET BANKING <span>(currently unavilable)</span></label>
            </div>
            <div class="div4">
                <input type="radio" value="Female" name="gender" id="feMale2" required />
                <label for="female">CASH ON DELIEVERY </label>
            </div>

        </div>
        <div class="btn">
        <button id="btn"><a href="/last" >PROCEED</a></button>
         <button><a href="/Shop">Explore More Categories</a></button>
        </div>
        </div>
    </div>
  )
}

export default Payment
