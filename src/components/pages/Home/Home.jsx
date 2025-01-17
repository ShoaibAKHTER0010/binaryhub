import React, { useState } from "react";
import "./Home.css";
import Header from "../../Header/Header";
import ExploreMenu from "../../ExploreMenu/Explore";
import Food from "../../FoodDisplay/Food";
import AppDownload from "../../Appdownload/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Food category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
