import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForthData from "./ForthData";

const Shop = () => {
  const [data, setData] = useState(ForthData);
  const navigate = useNavigate();
  const handleJacket = (p1) => {
    const result = ForthData.filter((otpt) => {
      return otpt.category === p1;
    });
    setData(result);
  };
  const handleJacket1 = () => {
    setData(ForthData);
  };

  const handleshop = (x) => {
  const txt = x.id;
    navigate(`/ShopNow/${txt}`);

  };

  return (
    <div className="container">
      <button className="btn3" onClick={handleJacket1}>
        All
      </button>
      <button className="btn3" onClick={() => handleJacket("Jacket")}>
        Jacket
      </button>
      <button className="btn3" onClick={() => handleJacket("Hoodie")}>
        Hoodie
      </button>
      <button className="btn3" onClick={() => handleJacket("Jeans")}>
        Jeans
      </button>
      <button className="btn3" onClick={() => handleJacket("Sweater")}>
        Sweater
      </button>
      <button className="btn3" onClick={() => handleJacket("Cardigan")}>
        Cardigan
      </button>
      <button className="btn3" onClick={() => handleJacket("Lawndress")}>
        Lawndress
      </button>
      <button className="btn3" onClick={() => handleJacket("Fleece")}>
        Fleece
      </button>
      <button className="btn3" onClick={() => handleJacket("Trenchcoat")}>
        Trenchcoat
      </button>
      <div class="cart">
        {data.map((data1) => {
          return (
            <div class="img" key={data1.id}>
              <img src={`./pics/${data1.src}`} alt="Shop Now" />
              <button className="btn1">1199$</button>
              <button className="btn2" onClick={()=>handleshop(data1)}>
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
