import React from 'react'

const Secpage = () => {
    const Secdata = [
        {
            id:1,
            src:"./pics/p1.jpg",
            txt:"get it on 70% off",
        },
        {
            id:2,
            src:"./pics/p1.jpg",
            txt:"get it on 70% off",
        },
        {
            id:3,
            src:"./pics/p5.jpg",
            txt:"get it on 70% off",
        },
        {
            id:4,
            src:"./pics/p1.jpg",
            txt:"get it on 70% off",
        },
        {
            id:5,
            src:"./pics/p1.jpg",
            txt:"get it on 70% off",
        },
    ]
  return (
    <div className="container">
<video autoPlay muted loop id="myVideo">
              <source src="./video/Woman - 137579.mp4" type="video/mp4" />
          </video>

    <div class="offers">
        {
            Secdata.map((sec)=>{
     return <div class="cards" key={sec.id} style={{backgroundImage:`url(${sec.src})`}}>
        <a href="/DESCpage" >{sec.txt}</a>
        {/* <img src={sec.src} alt="shop now" /> */}
    </div>
            })
        }
    
   
</div>
</div>

  )
}

export default Secpage
