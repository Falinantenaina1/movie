import { UseFetchMovieList } from "../hooks/UseFetchMovieList";
import { Carousel } from "./Carousel";
import { Heading } from "./Heading";
import { LoadingCarousel } from "./LoadingCarousel";
import { Section } from "./Section";

export const Popular = () => {
  const { data, loading } = UseFetchMovieList("/popular");

  return (
    <Section>
      <Heading title="Popular" href="/popular" />
      <div className="py-4">
        {loading && <LoadingCarousel />}
        {data && <Carousel movies={data.results} />}
      </div>
    </Section>
  );
};
