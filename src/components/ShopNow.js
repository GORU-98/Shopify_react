import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ForthData from "./ForthData";

const ShopNow = () => {
  const [product,setproduct] = useState();
  const [product1,setproduct1] = useState();
  const [product2,setproduct2] = useState();
  const location = useLocation();
  useEffect(()=>{
    // eslint-disable-next-line
    const id=location.pathname.split("/"); 
    
    // console.log(id[2]);
    const result = ForthData.filter((data)=>{
      return data.id==id[2];
      
    })
    setproduct(
    result.map((x)=>{
        return x.src;
      
    }))
    setproduct1(
    result.map((x)=>{
        return x.category;
      
    }))
    setproduct2(
    result.map((x)=>{
        return x.title;
      
    }))
  },[])

  return (
    <>
    <div className='container'>
      <div className="shopnow">

        
         <div className="img">
            <img src={`../pics/${product} `}alt="ShopNow" />
          </div><div className="shopDesc">
              <h1>Jackt</h1>
              <h3>Description about Product : Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsam.</h3>
              <button className='btn1'>{product2}</button>
              <button className='btn2'><a href="/pay">Buy Now</a>  </button>
              <button className='btn3'>Rating:</button>
              <button className='btn5'>̂Cash on Delievery available</button>
              <button className='btn4'>Delievery in:{new Date().toUTCString()}</button>

            </div>
       

      </div>
    </div>
    </>
  )
}

export default ShopNow
