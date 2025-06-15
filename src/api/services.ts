import type { Credits, MovieDetails, MovieList } from "../type";
import { fetchData } from "./client";

export const getMovieList = (path: string): Promise<MovieList> =>
  fetchData(`/movie/${path}`);

export const getDetails = (id: string | number): Promise<MovieDetails> =>
  fetchData(`/movie/${id.toString()}`);

export const getCredits = (id: string | number): Promise<Credits> =>
  fetchData(`/movie/${id}/credits`);

export const getAllMovies = () => fetchData("/discover/movie");
