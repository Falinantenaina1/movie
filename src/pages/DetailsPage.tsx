import { useParams } from "react-router";
import { Credits } from "../components/Credits";
import { ImageWithPlaceHolder } from "../components/ImageWithPlaceHolder";
import { Section } from "../components/Section";
import { useFetchDetails } from "../hooks/useFetchDetails";

const LoadingDetails = () => {
  return (
    <div className="mt-8 h-screen space-y-4 px-6">
      <div className="flex h-1/2 animate-pulse items-center justify-center rounded-xl bg-gray-800/80">
        Loading...
      </div>
      <div className="flex h-45 animate-pulse items-center justify-center rounded-xl bg-gray-800/80">
        Loading...
      </div>
    </div>
  );
};

const DetailsPage = () => {
  const { id } = useParams();

  if (!id) throw new Error("Missing ID");

  const { movie, loading } = useFetchDetails(id);

  if (loading) return <LoadingDetails />;

  return (
    <Section>
      {movie && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="relative flex items-stretch">
              {/*  <img
                src={`https://image.tmdb.org/t/p/w260_and_h390_bestv2${movie.poster_path}`}
                alt=""
                className="rounded-x w-full"
              /> */}
              <ImageWithPlaceHolder
                title={movie.title}
                poster_path={movie.poster_path}
                width={260}
                height={390}
                className="h-full"
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
                <div className="flex items-center gap-x-2">
                  <img src="/star.svg" alt="star" className="size-10" />
                  <div>
                    <div>
                      <span className="font-bold">
                        {movie.vote_average.toFixed(1)}
                      </span>{" "}
                      / 10
                    </div>
                    <div className="text-xs font-light">{movie.vote_count}</div>
                  </div>
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
          <div className="mt-8">
            <h2 className="mb-2 text-center text-xl font-bold">Distributeur</h2>
            <Credits id={id} />
          </div>
        </>
      )}
    </Section>
  );
};

export default DetailsPage;
