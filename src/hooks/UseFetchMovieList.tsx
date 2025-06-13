import { useEffect, useState } from "react";
import { getMovieList } from "../api/services";
import { type MovieList } from "../type";

export const UseFetchMovieList = (path: string) => {
  const [data, setData] = useState<MovieList>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieList(path)
      .then(setData)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [path]);

  return { data, loading, error };
};
