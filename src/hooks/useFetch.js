import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest"; // Importing a custom function for making requests

// Define the custom hook 'useFetch' that takes a 'url' as an argument
const useFetch = (url) => {
  // Initialize state variables using the 'useState' hook
  const [data, setData] = useState(null); // Stores fetched data
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [error, setError] = useState(false); // Tracks error state

  // Use the 'useEffect' hook to perform data fetching when 'url' changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state to true
        const res = await makeRequest.get(url); // Make a GET request using 'makeRequest.get' method
        setData(res.data.data); // Set the fetched data into the 'data' state
      } catch (err) {
        setError(true); // Set error state to true if there's an error
      }
      setLoading(false); // Set loading state back to false
    };
    fetchData(); // Call the fetchData function to initiate data fetching
  }, [url]); // Depend on 'url' so that the effect runs when 'url' changes

  // Return an object containing the fetched 'data', loading state, and error state
  return { data, loading, error };
};

export default useFetch; // Export the custom hook
