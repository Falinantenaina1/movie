import { Link } from "react-router";
import type { Movie } from "../type";
import { ImageWithPlaceHolder } from "./ImageWithPlaceHolder";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link className="relative w-full" to={`/movie/${movie.id}`}>
      <ImageWithPlaceHolder
        title={movie.title}
        poster_path={movie.poster_path}
        width={440}
        height={660}
        className="h-70 rounded-xl"
      />
      <h3 className="mt-3 text-center font-semibold hover:text-red-500">
        {movie.title}
      </h3>
    </Link>
  );
};
