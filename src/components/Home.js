import React from 'react'
import Navbar from './Navbar'
const Home = () => {
  return (
    <><Navbar />
    <div class="container">

          <video autoPlay muted loop id="myVideo">
              <source src="./video/Woman - 137579.mp4" type="video/mp4" />
          </video>


          <section>
              <div class="ar1">

                  <h1>Get the latest <span>fashion</span> and be a fashionholic</h1>
                  <h3>Whoever said money can't buy happiness simply didn't know where to go shopping.People are always going to go shopping. A lot of our effort is just: 'How do we make the retail experience a great one?'</h3>

                  <button class="btn1"><a href="/FIFpage"> SHop now</a></button>
                  <button class="btn2"><a href="/SECpage"> GRab your deal here</a></button>
              </div>

              <div class="ar2">
        {/* <!-- <img src="pics/pic2.jpg" alt="g" id="img"> --> */}
            <div class="img"></div> 

              </div> 

          </section>

      </div></>
  )
}

export default Home
