import type { Credits, MovieDetails, MovieList } from "../type";
import { fetchData } from "./client";

export const getMovieList = (path: string): Promise<MovieList> =>
  fetchData(path);

export const getDetails = (id: string | number): Promise<MovieDetails> =>
  fetchData(`/${id.toString()}`);

export const getCredits = (id: string | number): Promise<Credits> =>
  fetchData(`/${id}/credits`);
