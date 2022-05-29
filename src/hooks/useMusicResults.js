import { useEffect, useState } from "react";
import apiService from "../api/apiService";

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const apiSearch = async (searchInputTerm) => {
    try {
      console.log("apiSearch");
      const response = await apiService.get("/search/", {
        params: {
          q: searchInputTerm,
          type: "multi",
          limit: 5,
        },
      });
      setSearchResults(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    //apiSearch("abba");
  }, []);

  return [apiSearch, searchResults, errorMessage];
};
