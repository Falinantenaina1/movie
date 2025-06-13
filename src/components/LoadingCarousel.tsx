const LoadingCard = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="h-70 min-w-full animate-pulse rounded-xl bg-gray-800/80"></div>
      <div className="mx-auto mt-3 h-6 w-1/2 animate-pulse rounded-2xl bg-gray-800/80"></div>
    </div>
  );
};

export const LoadingCarousel = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <LoadingCard className="" />
      <LoadingCard className="max-sm:hidden" />
      <LoadingCard className="max-sm:hidden" />
      <LoadingCard className="max-md:hidden" />
      <LoadingCard className="max-lg:hidden" />
    </div>
  );
};
