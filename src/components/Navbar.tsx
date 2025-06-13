import { NavLink } from "react-router";

const menus = [
  {
    title: "New ReLeases",
    href: "/latest",
  },
  {
    title: "Popular",
    href: "/popular",
  },
  {
    title: "Genres",
    href: "/genres",
  },
];

const DesktopNavbar = () => {
  return (
    <nav className="items-center justify-between py-6 text-2xl max-lg:hidden lg:flex">
      <NavLink to={"/"} className="navlink">
        Home
      </NavLink>
      <div>Search</div>
      <div className="flex items-center gap-x-15">
        {menus.map((menu, index) => (
          <NavLink key={index} to={menu.href} className="navlink">
            {menu.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export const Navbar = () => {
  return <DesktopNavbar />;
};
