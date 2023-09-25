import React, { useEffect, useState } from 'react'
import ForthData from './ForthData'

const Shop = () => {
    const [data,setData] = useState(ForthData);
    const [d,setD] = useState();

    const handleJacket=(p1)=>{
     const result=ForthData.filter((otpt)=>{
        return otpt.category===p1
        
    })
    setData(result); 
    setD(p1);
}
const handleJacket1=()=>{
        setData(ForthData); 


    }
    useEffect(()=>{
        const link=window.location.pathname.concat(d);
        console.log(link)
    })

  return (
    <div className='container'>
        <button className='btn3' onClick={handleJacket1}>All</button>
        <button className='btn3' onClick={()=>handleJacket("Jacket")}>Jacket</button>
        <button className='btn3' onClick={()=>handleJacket("Hoodie")}>Hoodie</button>
        <button className='btn3' onClick={()=>handleJacket("Jeans")}>Jeans</button>
        <button className='btn3' onClick={()=>handleJacket("Sweater")}>Sweater</button>
      <div class="cart">
        {data.map((data1)=>{
            
            return    <div class="img" key={data1.id}>
                        <img src={`./pics/${data1.src}`} alt="Shop Now"/>
                       <button className='btn1'>1199$</button>
                       <button className='btn2'><a href="/ShopNow" >Buy Now</a> </button>
                    </div>
        })}
      
       </div>
    </div>
  )
}

export default Shop
