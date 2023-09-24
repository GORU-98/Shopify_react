import React from 'react'

const Navbar = () => {
  return (
    <header>
          <img src="./pics/logo1.png" alt="#" class="logo1" />
         <h2> Panchal Industries </h2>
        <nav>
            <ul>
                <li><a href="/Fpage" id="home">HOme</a></li>
                    <li><a href="/THIpage">ITems</a></li>
                    <li><a href="/SECpage">SAles</a></li>
                    <li><a href="/FORpage">SErvices</a></li>
                    <li><a href="/FIFpage">MOre</a></li>
                
            </ul>
        </nav>
        <img src="./pics/logo2.png" alt="#" class="logo2"/>
        </header>
  )
}

export default Navbar
