import React, {useEffect} from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Main from "../components/Main";
import foodItems from "../assets/fooditem.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);

  return (
    <div>
      <div>
      <Navbar></Navbar>
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
