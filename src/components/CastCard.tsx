import type { Cast } from "../type";

export const CastCard = ({ cast }: { cast: Cast }) => {
  return (
    <div className="w-35 rounded-xl">
      {cast.profile_path ? (
        <img
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${cast.profile_path}`}
          alt=""
          className="full h-45"
        />
      ) : (
        <div className="flex h-45 w-full items-center justify-center bg-gray-800">
          No profil
        </div>
      )}
      <div>
        <h4>{cast.name}</h4>
        <p>{cast.character}</p>
      </div>
    </div>
  );
};
