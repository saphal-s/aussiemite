import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="family">
      <div className="home p-5">
        <div className="join">
          <h3>Join The AUSSIEMITE Family</h3>
          <p>Reveive updates, Product announcement and news</p>
        </div>
        <div className="sing">
          <button>SIGN UP TO OUR NEWSLETTER</button>
        </div>
      </div>
      <img src="./images/foot.png" className="w-100" alt="" />
    </div>
  );
};

export default Home;
