import { UseFetchMovieList } from "../hooks/UseFetchMovieList";
import { Carousel } from "./Carousel";
import { Heading } from "./Heading";
import { LoadingCarousel } from "./LoadingCarousel";
import { Section } from "./Section";

export const Upcoming = () => {
  const { data, loading, error } = UseFetchMovieList("/upcoming");

  return (
    <Section>
      <Heading title="Nouvelle film" href="/upcoming" />
      <div className="py-4">
        {loading && <LoadingCarousel />}

        {error && <div>Error</div>}
        {data && <Carousel movies={data.results} />}
      </div>
    </Section>
  );
};
