import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Catigary</h1>
      <p className="explore-menu-text">
        {/* Choose from a driverse menu feauring a delectable arry of dishes.Our
        mission is to sarisfy your craving and elevate your dining
        experience,one delicious meal at a time. */}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vel
        similique ad? Placeat perferendis nemo aliquam quo dicta a itaque?
        Sapiente atque illum excepturi commodi! deserunt.
      </p>
      <div className="Explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={(event) =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Explore;
