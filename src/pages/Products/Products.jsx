import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  // Extract category ID from URL parameters
  const catId = parseInt(useParams().id);

  // State for filtering by maximum price and sorting
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  // State for tracking selected sub-categories
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // Fetch sub-categories for the selected category
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  // Handle change in selected sub-categories
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      {/* Left section with filters */}
      <div className="left">
        {/* Filter by sub-categories */}
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        {/* Filter by price */}
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        {/* Sort options */}
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      {/* Right section with product list */}
      <div className="right">
        {/* Display category image */}
        <img
          className="catImg"
          src="https://static.zarahome.net/8/photos4/2023/I/4/1/b/4226/000/737/BH/ZZ/4226000737_12_2_1.jpg?t=1690985356935&imformat=chrome"
          alt=""
        />
        {/* Render product list */}
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
