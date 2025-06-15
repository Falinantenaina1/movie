import { UseFetchMovieList } from "../hooks/UseFetchMovieList";
import { Carousel } from "./Carousel";
import { Heading } from "./Heading";
import { LoadingCarousel } from "./LoadingCarousel";
import { Section } from "./Section";

export const TopRated = () => {
  const { data, loading, error } = UseFetchMovieList("/top_rated");

  return (
    <Section>
      <Heading title="Les mieux notées" href="/top_rated" />
      <div className="py-4">
        {loading && <LoadingCarousel />}

        {error && <div>Error</div>}
        {data && <Carousel movies={data.results} />}
      </div>
    </Section>
  );
};
