import React from 'react'
import {
  Outlet
 } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <header>
          <img src="./pics/logo1.png" alt="#" class="logo1" />
         <h2> Panchal Industries </h2>
        <nav>
            <ul>
                <li><a href="/" id="home">HOme</a></li>
                    <li><a href="/sec">ITems</a></li>
                    <li><a href="/third">SAles</a></li>
                    <li><a href="/fourth">SErvices</a></li>
                    <li><a href="/fifth">MOre</a></li>
                
            </ul>
        </nav>
        <img src="./pics/logo2.png" alt="#" class="logo2"/>

        </header>
        <Outlet/>
        </>
  )
}

export default Navbar
