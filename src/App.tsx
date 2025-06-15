import { createBrowserRouter, RouterProvider } from "react-router";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MoviesPage from "./pages/MoviesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "movie",
        children: [
          {
            path: "",
            element: <MoviesPage />,
          },
          {
            path: ":id",
            element: <DetailsPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
