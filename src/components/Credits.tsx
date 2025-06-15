import { useFetchCredits } from "../hooks/useFetchCredits";
import { CastCard } from "./CastCard";

export const Credits = ({ id }: { id: string | number }) => {
  const { credits, loading, error } = useFetchCredits(id);

  if (loading) return <div>Loading...</div>;

  if (error) throw new Error("Error fetching credits");
  return (
    <>
      {credits && (
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          {credits.cast.slice(0, 7).map((cast) => (
            <CastCard key={cast.id} cast={cast} />
          ))}
        </div>
      )}
    </>
  );
};
