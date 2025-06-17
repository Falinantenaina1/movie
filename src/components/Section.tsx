export const Section = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`px-4 py-2 ${className}`}>{children}</div>;
};
