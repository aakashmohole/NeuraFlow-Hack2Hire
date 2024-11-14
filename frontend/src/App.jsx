import LandingPage from "./pages/LandingPage";
import ExploreProjects from "./pages/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/explore",
      element: (
        <div className="w-full h-screen bg-slate-950 items-center">
          <ExploreProjects />
        </div>
      ),
    },
    {
      path: "/services",
      element: <Service />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="w-full h-screen bg-slate-950 items-center"></div> */}
    </>
  );
}

export default App;
