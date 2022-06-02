import { useEffect, useState } from "react";
import apiService from "../api/apiService";

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const apiSearch = async (searchInputTerm) => {
    try {
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
    apiSearch("elton john");
  }, []);

  return [apiSearch, searchResults, errorMessage];
};
