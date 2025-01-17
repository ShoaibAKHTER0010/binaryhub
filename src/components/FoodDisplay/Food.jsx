import React, { useContext } from "react";
import "./Food.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const Food = ({ category }) => { 
  const { food_list } = useContext(StoreContext);
  console.log("food_list",food_list)

  return (
    <div className="food-display" id="food-display">
      <h2>Top product near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Food;




