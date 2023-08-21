import React from "react";
import "./List.scss"; // Import your List component's stylesheet
import Card from "../Card/Card"; // Import the Card component
import useFetch from "../../hooks/useFetch"; // Import the useFetch hook

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Use the useFetch hook to fetch data from the API based on the provided filters
  const { data, loading, error } = useFetch(
    // Construct the API endpoint URL with dynamic filters
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {/* Display "loading" while data is being fetched, or map through data and render Card components */}
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
