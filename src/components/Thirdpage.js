import React from 'react'
import Vdo from './Vdo'

const Thirdpage = () => {
    const List =[
        {
            id:1,
            txt:"Jeans",
        },
        {
            id:2,
            txt:"Shorts",
        },
        {
            id:3,
            txt:"T-shirt",
        },
        {
            id:4,
            txt:"Jacket",
        },
        {
            id:5,
            txt:"Sweater",
        },
        {
            id:6,
            txt:"Coat",
        },
        {
            id:7,
            txt:"Skirt",
        },
        {
            id:8,
            txt:"Scarf",
        },
        {
            id:9,
            txt:"Boot",
        },
        {
            id:10,
            txt:"High Heels",
        },
        {
            id:11,
            txt:"Dress",
        },
        {
            id:12,
            txt:"Swisuit",
        },
        {
            id:13,
            txt:"Saree",
        },
        {
            id:14,
            txt:"Smuf",
        },
    ]
  return (
    <div className='container'>
       <div class="pg3">
<Vdo src="./video/Kid - 135875.mp4"/>
            <div class="img1">
                <h1>Buy from a vast range of clothes  </h1>
                <div class="img"></div>
            </div>


            <div class="img2">
                <ul id="list">
                    {List.map((list)=>{
                        return  <li key={list.id}><a href="/Shop">{list.txt}</a> </li>
                    })}
                 </ul>
             </div>


        </div>
    </div>
    
  )
}

export default Thirdpage
