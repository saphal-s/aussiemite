import React from "react";
import "./style.css";

const Receipe = () => {
  return (
    <div className="p-5 pt-0">
      <div className="products">
        <div className="head">
          <h3>Our Recipes</h3>
        </div>
        <div className="product pt-4">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="recipe-card">
                <img src="./images/rec1.jpeg" className="w-100" alt="" />
                <div className="recipe-title">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="recipe-card">
                <img src="./images/rec2.jpeg" className="w-100" alt="" />
                <div className="recipe-title">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="recipe-card">
                <img src="./images/rec3.jpeg" className="w-100" alt="" />
                <div className="recipe-title">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="recipe-card">
                <img src="./images/rec4.jpeg" className="w-100" alt="" />
                <div className="recipe-title">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipe;
