import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getAllMovies } from "../api/services";
import { LoadingCarousel } from "../components/LoadingCarousel";
import { MovieCard } from "../components/MovieCard";
import { Pagination } from "../components/Pagination";
import { Section } from "../components/Section";
import type { MovieList } from "../type";

const MoviesPage = () => {
  const [searchParams] = useSearchParams();

  const [data, setData] = useState<MovieList>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movies = async () => {
      const page = searchParams.get("page") || 1;
      setLoading(true);
      const test = await getAllMovies(page);
      setData(test);
      setLoading(false);
    };
    movies();
  }, [searchParams]);

  if (loading)
    return (
      <Section className="space-y-4">
        <LoadingCarousel />
        <LoadingCarousel />
        <LoadingCarousel />
      </Section>
    );
  return (
    <>
      {data && (
        <Section>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 md:gap-x-4 lg:grid-cols-5">
            {data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination
            currentPage={data.page}
            totalPages={data.totals_pages}
            //setPage={setPage}
          />
        </Section>
      )}
    </>
  );
};

export default MoviesPage;
