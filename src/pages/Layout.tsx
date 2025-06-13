import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

const Layout = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
