import React from "react";
import "./style.css";

const Pricing = () => {
  return (
    <div className="p-5 pt-0">
      <div className="products">
        <div className="head">
          <h3>Our Bundles</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            magnam similique voluptatem dolores quis adipisci ad labore?
          </p>
        </div>
        <div className="bundle">
          <div className="bundle-card-1">
            <div className="bundle-img">
              <img src="./images/290g.jpeg" className="w-100" alt="" />
            </div>
            <div className="bundle-content ">
              <p className="ps-3 pe-3">Lorem ipsum, dolor sit amet</p>
              <p className="ps-3 pe-3" style={{ marginTop: "-15px" }}>
                $5000
              </p>
            </div>
          </div>
          <div className="bundle-card-2">
            <div className="bundle-img">
              <img src="./images/bundle.png" className="w-100" alt="" />
            </div>
            <div className="bundle-content pb-4">
              <p className="ps-3 pe-3">Lorem ipsum, dolor sit amet</p>
              <p className="ps-3 pe-3" style={{ marginTop: "-15px" }}>
                $8000
              </p>
            </div>
          </div>
          <div className="bundle-card-1">
            <div className="bundle-img">
              <img src="./images/290g.jpeg" className="w-100" alt="" />
            </div>
            <div className="bundle-content">
              <p className="ps-3 pe-3">Lorem ipsum, dolor sit amet</p>
              <p className="ps-3 pe-3" style={{ marginTop: "-15px" }}>
                $5000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
