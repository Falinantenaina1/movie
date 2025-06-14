import { useParams } from "react-router";
import { Credits } from "../components/Credits";
import { Section } from "../components/Section";
import { useFetchDetails } from "../hooks/useFetchDetails";

// const POSTER_PATH = import.meta.env.VITE_POSTER_PATH;

const DetailsPage = () => {
  const { id } = useParams();

  if (!id) throw new Error("Missing ID");

  const { movie, loading } = useFetchDetails(id);

  if (loading) return <div>Loading....</div>;

  return (
    <Section>
      {movie && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="flex items-stretch">
              <img
                src={`https://image.tmdb.org/t/p/w260_and_h390_bestv2${movie.poster_path}`}
                alt=""
                className="rounded-x w-full"
              />
            </div>
            <div className="relative h-full md:col-span-3">
              <div className="space-y-6 p-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    {movie.title}
                    <span className="font-light">
                      ({movie.release_date.split("-")[0]})
                    </span>
                  </h2>
                  <p className="font-light">
                    Titre original: {movie.original_title}
                  </p>
                  <p className="font-light">
                    {movie.release_date.split("-").reverse().join("/")}{" "}
                  </p>
                </div>
                <div
                  className={`rounded-full border-4 border-${movie.vote_average < 7 ? "" : "green"}-500 flex size-15 items-center justify-center text-lg`}
                >
                  {movie.vote_average.toFixed(1)}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {movie.genres.map((genre) => (
                    <div
                      key={genre.id}
                      className="rounded-2xl border border-white/50 px-3 py-1 hover:bg-white/50"
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
                <p>{movie.overview}</p>
              </div>
              <img
                className="absolute top-0 -z-10 block h-full w-full opacity-20"
                src={`https://image.tmdb.org/t/p/w1066_and_h600_bestv2${movie.backdrop_path}`}
                alt=""
              />
            </div>
          </div>
          <div>
            <h2>Cast</h2>
            <Credits id={id} />
          </div>
        </>
      )}
    </Section>
  );
};

export default DetailsPage;
