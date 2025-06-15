import { useState } from "react";

export const ImageWithPlaceHolder = ({
  title,
  poster_path,
  width,
  height,
  className,
}: {
  title: string;
  poster_path: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div
          className={`absolute inset-0 flex ${className} w-full animate-pulse items-center justify-center bg-gray-800/80`}
        >
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
      <img
        className={`${className} min-w-full transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
        src={`https://media.themoviedb.org/t/p/w${width}_and_h${height}_face/${poster_path}`}
        alt={`${title}-poster`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};
