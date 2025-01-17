import React, { useContext } from "react";
import "./Card.css";
import { StoreContext } from "../../../Context/StoreContext";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { cartItems, food_list, removeFromCard,getTotalCartAmount } = useContext(StoreContext);

  const navigate=useNavigate();



  return (
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total price</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="card-items-title card-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCard(item._id)} className="cross">
                    <img src={assets.cross_icon} alt="" />
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h2>Cart Total</h2>
          <div>
            <div className="card-total-details">
              <p>Sub -Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivary Fee</p>
              <br />
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <br />
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="card-promocode">
          <div>
            <p>if your a promo code,Enter it here</p>
            <div className="card-promocode-input">
              <input type="text" placeholder="promo code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
