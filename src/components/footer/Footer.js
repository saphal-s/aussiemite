import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="container p-5">
        <div className="footer">
          <div className="col-md-2">
            <div className="logo">
              <div className="form">
                <form>
                  <h5>Subscribe</h5>
                  <div className="form">
                    <input type="text" placeholder="Your email" />
                    <input type="text" placeholder="Your city" />
                    <input type="text" placeholder="Your phone number" />
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <ul className="nav-list">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Products</li>
              <li>Newsletter / Blog</li>
            </ul>
          </div>
        </div>
        <div className="social-links pb-3">
          <div className="ficon">
            <FaFacebookF className="ico" />
          </div>
          <div className="ficon">
            <AiOutlineInstagram className="ico" />
          </div>
          <div className="ficon">
            <AiOutlineTwitter className="ico" />
          </div>
        </div>
      </div>
      <footer className="foots">
        <p>
          AUSSIEMITE IS CRAFTED IN SMALL BATCHES FROM QUALITY AUSTRALIAN AND NEW
          ZEALAND INGREDIENTS
          <br />
          TO PROVIDE A YEAST SPREAD THAT’S SMOOTH IN TASTE AND KIND ON TASTEBUDS
        </p>
        <span>&copy; 2023 aussiemite.net</span>
      </footer>
    </>
  );
};

export default Footer;
