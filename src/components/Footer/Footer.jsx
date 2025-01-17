import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" id="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolor beatae tenetur! Odit
            ut harum placeat sit reiciendis. Repellendus fuga veniam quaerat
            modi quis obcaecati?
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-Right">
        <h2>Information Portion</h2>
            <ul>
                <li>+92118951600</li>
                <li>FB,IG & Tiktok</li>
                <li> <a href="theroyalshoppinghub.com">theroyalshoppinghub.com</a> </li>
                <li>Royal Sell & Services (SME)</li>

            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2020 @ theroyalshoppinghub.com.All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
