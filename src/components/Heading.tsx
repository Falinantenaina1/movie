import { Link } from "react-router";

export const Heading = (props: { title: string; href: string }) => {
  return (
    <div className="flex items-center justify-between px-4">
      <h2 className="text-lg font-semibold">{props.title}</h2>
      <Link to={props.href} className="text-xs underline">
        Voir plus
      </Link>
    </div>
  );
};
