import { useEffect, useState } from "react";
import { getAllMovies } from "../api/services";
import type { MovieList } from "../type";

export const useFetchAllMovies = (page: string | number) => {
  const [data, setData] = useState<MovieList>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllMovies(page)
      .then(setData)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
