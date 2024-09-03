import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";

const Home = () => {
  return (
    <>
      <div className="py-4 container">
        <div className="home-header mb-4 text-center">
          <h1 className="classic">CLASSIC TRENDY WEARS</h1>
          <p className="afford">Affordable, Original, Authentic</p>
        </div>
        <div className="row justify-content-center">
            {data.productData.map((item,index) => {
                return(
                    <ItemCard item = {item} name = {item.name} description = {item.description} img = {item.img} price = {item.price}/>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
