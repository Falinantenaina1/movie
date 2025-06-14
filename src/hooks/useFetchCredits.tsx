import { useEffect, useState } from "react";
import { getCredits } from "../api/services";
import type { Credits } from "../type";

export const useFetchCredits = (id: string | number) => {
  const [credits, setCredits] = useState<Credits>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCredits(id)
      .then(setCredits)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { credits, loading, error };
};
