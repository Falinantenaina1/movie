import { NavLink } from "react-router";

const menus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Movies",
    href: "/movie",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-x-4 py-4 md:py-10">
      {menus.map((menu) => (
        <NavLink key={menu.title} className="navlink text-2xl" to={menu.href}>
          {menu.title}
        </NavLink>
      ))}
    </nav>
  );
};
