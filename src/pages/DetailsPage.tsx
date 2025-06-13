import { useParams } from "react-router";
import { Section } from "../components/Section";
import { useFetchDetails } from "../hooks/useFetchDetails";

const POSTER_PATH = import.meta.env.VITE_POSTER_PATH;

const DetailsPage = () => {
  const { id } = useParams();

  if (!id) throw new Error("Missing ID");

  const { movie, loading } = useFetchDetails(id);

  if (loading) return <div>Loading....</div>;

  return (
    <Section>
      {movie && (
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-3">
          <img
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt=""
            className="w-full rounded-xl"
          />
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">
              {movie.title}
              <span className="font-light">
                {" "}
                ({movie.release_date.split("-")[0]})
              </span>
            </h2>
            <p>
              {movie.release_date.split("-").join("/")} .{" "}
              {movie.genres.map((genre, index) => (
                <span key={index}>
                  {index > 0 ? " - " : null}
                  {genre.name}
                </span>
              ))}
            </p>
            <div>
              <h3>Synopsis</h3>
              <p>{movie.overview}</p>
            </div>
            <div>Cast</div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default DetailsPage;
