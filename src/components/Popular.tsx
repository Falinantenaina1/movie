import { UseFetchMovieList } from "../hooks/UseFetchMovieList";
import { Carousel } from "./Carousel";
import { Heading } from "./Heading";
import { LoadingCarousel } from "./LoadingCarousel";
import { Section } from "./Section";

export const Popular = () => {
  const { data, loading, error } = UseFetchMovieList("/popular");

  if (error) throw new Error("Erreur lors du chargement des films");

  return (
    <Section>
      <Heading title="Films populaire" href="/popular" />
      <div className="py-4">
        {loading && <LoadingCarousel />}
        {data && <Carousel movies={data.results} />}
      </div>
    </Section>
  );
};
