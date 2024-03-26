import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setDate(json.results);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
