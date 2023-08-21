import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}&[filters][img][$exists]=true`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Each product in this collection embodies our commitment to quality, performance, and design excellence. Whether you're looking to upgrade your living space, enhance your personal style, or find the perfect gift for someone special, our Featured Products are here to inspire and delight.<br></br>

       We believe that every item tells a story, and we're excited to share these stories with you. <br></br>

        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;