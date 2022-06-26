import React from "react";
import Navbar from "./Navbar";
import OrderCard from "./OrderCard";
import Summary from "./Summary";
import item1 from "../assets/item-1.jpeg";
import item2 from "../assets/item-2.png";
import item3 from "../assets/item-3.png";

const Orders = () => {
  return (
    <div className="h-full">
      <Navbar></Navbar>
      <hr></hr>
      <div className="flex h-full">
        <div className="w-[70%] p-10">
          <div className="text-5xl">Orders</div>
          <div>
            <div className="text-l py-4"> List of orders</div>
            <div>
              <OrderCard
                img1={<img className="w-70" src={item1}></img>}
                img2={<img src={item3}></img>}
                img3={<img src={item1}></img>}
                price={24}
              ></OrderCard>
            </div>
            <div className="pt-7">
              <OrderCard
                img1={<img className="w-70" src={item3}></img>}
                img2={<img src={item1}></img>}
                img3={<img src={item3}></img>}
                price={55}
              ></OrderCard>
            </div>
          </div>
        </div>
        <div className="w-[30%] p-10">
          <div className="text-3xl">Summary</div>
          <Summary></Summary>
        </div>
      </div>
    </div>
  );
};

export default Orders;
