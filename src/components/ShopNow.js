import React from 'react'

const ShopNow = () => {
    // const [date,setdate]=useState()
    // useEffect(()=>{
    //     let a =new Date();
    //     a.setDate(a.getDate() +5);
    //     setdate(a);
    // },[])
  return (
    <div className='container'>
      <div className="shopnow">
        <div className="img">

        <img src="./pics/p4.jpg" alt="ShopNow"/>
        </div>
        <div className="shopDesc">
            <h1>Jackt</h1>
            <h3>Description about Product : Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsam.</h3>
        <button className='btn1'>1199$</button>
        <button className='btn2'><a href="/PAYMENTpage" >Buy Now</a> </button>
        <button className='btn3'>Rating:</button>
        <button className='btn5'>̂Cash on Delievery available</button>
        <button className='btn4'>Delievery in:{new Date().toUTCString() }</button>
        </div>
      </div>
    </div>
  )
}

export default ShopNow
