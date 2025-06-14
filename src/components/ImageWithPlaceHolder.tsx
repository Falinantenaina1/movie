import { useState } from "react";

export const ImageWithPlaceHolder = ({
  title,
  poster_path,
}: {
  title: string;
  poster_path: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex h-70 w-full animate-pulse items-center justify-center rounded-xl bg-gray-800/80">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
      <img
        className={`h-70 min-w-full rounded-xl transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
        alt={`${title}-poster`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};
