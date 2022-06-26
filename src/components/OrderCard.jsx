import React from "react";
import { TiTick, TiCancel } from "react-icons/ti";
import { FaCcPaypal } from "react-icons/fa";

const OrderCard = (props) => {
  return (
    <div className="flex bg-white border-black-100 border-2 rounded-2xl p-1 drop-shadow-md hover:drop-shadow-xl justify-around">
      <div className=" w-[80%] p-2">
        <div>Items:</div>
        <div className="flex justify-between">
            <div>{props.img1}</div>
            <div>{props.img2}</div>
            <div>{props.img3}</div>
        </div>
        <div className="flex text-2xl pt-1">Campaigns:<div className="text-purple-500 font-bold pl-4">GrabSave</div></div>
      </div>
      <div className="w-[20%]">
          <div className="flex justify-center  pt-2">
            <FaCcPaypal className="w-10 h-10"></FaCcPaypal>
          </div>
          <div className="flex justify-center text-[#009c49] font-bold text-7xl p-4">
            ${props.price}
          </div>
          <div className="flex justify-center pt-4 pb-2">
            <div className="px-2">
              <button className="p-2 bg-red-500 text-white">
                <TiCancel></TiCancel>
              </button>
            </div>
            <div className="px-2">
              <button className="p-2 bg-[#009c49] text-white">
                <TiTick></TiTick>
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
