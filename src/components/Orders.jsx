import React from "react";
import Navbar from "./Navbar";
import OrderCard from "./OrderCard";
import Summary from "./Summary";
import item1 from "../assets/item-1.jpeg";
import item2 from "../assets/item-2.png";
import item3 from "../assets/item-3.png";
import axios from 'axios'
import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]); 
  const fetchURL= "https://grab-pos-server.herokuapp.com/pos/getorders"

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
        setOrders(response.data)
    })
  }, [])

  console.log(orders)

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
              {orders.map((items) => (<OrderCard  orderData={JSON.parse(items.data)}></OrderCard>))}
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
