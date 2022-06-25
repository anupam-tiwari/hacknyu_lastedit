import React from "react";
import Main from "../components/Main";
import foodItems from "../assets/fooditem.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Main></Main>
      </div>
      <div className=" flex justify-center p-10">
        <div>
          <div className="pb-8">
            <h1 className="text-3xl font-bold">There's something for everyone!</h1>
          </div>
          <div>
            <img src={foodItems}></img>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
