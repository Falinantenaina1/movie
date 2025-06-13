import { useEffect, useState } from "react";
import { getDetails } from "../api/services";
import type { MovieDetails } from "../type";

export const useFetchDetails = (id: string | number) => {
  const [movie, setDetails] = useState<MovieDetails>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDetails(id)
      .then(setDetails)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { movie, loading, error };
};
