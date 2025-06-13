import type { MovieDetails, MovieList } from "../type";
import { fetchData } from "./client";

export const getMovieList = (path: string): Promise<MovieList> =>
  fetchData(path);

export const getDetails = (id: string | number): Promise<MovieDetails> =>
  fetchData(`/${id.toString()}`);

export const getCast = (id: string) => fetchData(`/${id}/credits`);
