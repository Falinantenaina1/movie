import { createBrowserRouter, RouterProvider } from "react-router";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import LatestPage from "./pages/LatestPage";
import Layout from "./pages/Layout";
import PopularPage from "./pages/PopularPage";

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
        path: "/latest",
        element: <LatestPage />,
      },
      {
        path: "/popular",
        element: <PopularPage />,
      },
      {
        path: "/movie/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
