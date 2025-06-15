import type { Cast } from "../type";

export const CastCard = ({ cast }: { cast: Cast }) => {
  return (
    <div className="min-h-full w-40 rounded-2xl bg-white">
      {cast.profile_path ? (
        <img
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${cast.profile_path}`}
          alt=""
          className="h-45 w-full rounded-t-2xl"
        />
      ) : (
        <div className="flex h-45 w-full items-center justify-center rounded-t-2xl bg-gray-800">
          Not Found
        </div>
      )}
      <div className="rounded-b-2xl p-4 text-xs text-black">
        <h4 className="font-semibold">{cast.name}</h4>
        <p className="font-light">{cast.character}</p>
      </div>
    </div>
  );
};
