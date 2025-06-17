import { UseFetchMovieList } from "../hooks/UseFetchMovieList";
import { Carousel } from "./Carousel";
import { Heading } from "./Heading";
import { LoadingCarousel } from "./LoadingCarousel";
import { Section } from "./Section";

export const Upcoming = () => {
  const { data, loading, error } = UseFetchMovieList("/upcoming");

  if (error) throw new Error("Erreur lors du chargement des films");

  return (
    <Section>
      <Heading title="Nouveaux fims" href="/movie" />
      <div className="py-4">
        {loading && <LoadingCarousel />}

        {data && <Carousel movies={data.results} />}
      </div>
    </Section>
  );
};
