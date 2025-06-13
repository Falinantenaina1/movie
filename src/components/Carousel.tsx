import { useEffect, useState } from "react";
import type { Movie } from "../type";
import { MovieCard } from "./MovieCard";

export const Carousel = ({ movies }: { movies: Array<Movie> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideToShow, setSlideToShow] = useState(1);

  useEffect(() => {
    const updateSlideToShow = () => {
      if (window.innerWidth >= 1024) setSlideToShow(5);
      else if (window.innerWidth >= 768) setSlideToShow(4);
      else if (window.innerHeight >= 492) setSlideToShow(3);
      else setSlideToShow(1);
    };
    updateSlideToShow();
  });

  const prevSlide = () => {
    if (currentIndex == 0) return;
    else setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex + 1 >= movies.length / slideToShow) setCurrentIndex(-1);
    setCurrentIndex((prev) => Math.min(prev + 1, movies.length / slideToShow));
  };

  return (
    <div className="relative w-full overflow-hidden sm:px-2">
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex w-full flex-shrink-0 justify-center px-8 sm:w-1/3 sm:px-4 md:w-1/4 lg:w-1/5"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      {currentIndex > 0 ? (
        <button
          onClick={prevSlide}
          className="boder-2 absolute top-2/5 left-0 z-10 w-5 -translate-y-1/2 cursor-pointer border-transparent hover:bg-white"
        >
          <img src="/prev-icon.svg" alt="prev" />
        </button>
      ) : null}
      <button
        onClick={nextSlide}
        className="absolute top-2/5 right-0 z-10 w-5 -translate-y-1/2 cursor-pointer hover:bg-white"
      >
        <img src="/next-icon.svg" alt="next" />
      </button>
    </div>
  );
};
