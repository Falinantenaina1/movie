import type { Movie } from "../type";
import { MovieCard } from "./MovieCard";

export const Carousel = ({ movies }: { movies: Array<Movie> }) => {
  return (
    <div className="relative w-full overflow-x-scroll pb-4 sm:px-2">
      <div className="flex">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex w-full flex-shrink-0 justify-center px-8 sm:w-1/3 sm:px-4 md:w-1/4 lg:w-1/5"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
