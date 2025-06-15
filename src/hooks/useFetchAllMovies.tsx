import { useEffect, useState } from "react";
import { getAllMovies } from "../api/services";
import type { MovieList } from "../type";

export const useFetchAllMovies = () => {
  const [data, setData] = useState<MovieList>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllMovies()
      .then(setData)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
