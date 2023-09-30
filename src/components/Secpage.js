import React from 'react'
import Vdo from './Vdo'

const Secpage = () => {
    const Secdata = [
        {
            id:1,
            src:"./pics/p1.jpg",
            txt:"get it on 70% off",
        },
        {
            id:2,
            src:"./pics/p2.jpg",
            txt:"get it on 70% off",
        },
        {
            id:3,
            src:"./pics/p5.jpg",
            txt:"get it on 70% off",
        },
        {
            id:4,
            src:"./pics/p3.jpg",
            txt:"get it on 70% off",
        },
        {
            id:5,
            src:"./pics/p0.jpg",
            txt:"get it on 70% off",
        },
        {
            id:6,
            src:"./pics/p9.jpg",
            txt:"get it on 70% off",
        },
        {
            id:7,
            src:"./pics/p13.jpg",
            txt:"get it on 70% off",
        },
    ]
  return (
    <div className="container">
<Vdo src="./video/Woman - 137579.mp4"/>
    <div class="offers">
        {
            Secdata.map((sec)=>{
     return <div class="cards" key={sec.id} style={{backgroundImage:`url(${sec.src})`}}>
        <a href="/Shop" >{sec.txt}</a> 
        {/* <img src={sec.src} alt="shop now" /> */}
    </div>
            })
        }
    
   
</div>
</div>

  )
}

export default Secpage
