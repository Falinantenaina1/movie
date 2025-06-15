import { useSearchParams } from "react-router";
import { MovieCard } from "../components/MovieCard";
import { Section } from "../components/Section";
import { useFetchAllMovies } from "../hooks/useFetchAllMovies";

const MoviesPage = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");

  console.log(page);

  const { data, loading, error } = useFetchAllMovies();

  if (error) throw new Error("Error fetching Movie");

  if (loading) return <div>Loading</div>;
  return (
    <Section>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 md:gap-x-4 lg:grid-cols-5">
        {data && (
          <>
            {data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </>
        )}
      </div>
    </Section>
  );
};

export default MoviesPage;
