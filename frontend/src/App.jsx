import LandingPage from "./pages/LandingPage";
import ExploreProjects from "./pages/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthProvider from "./components/custom/AuthProvider";
import SingleProject from "./pages/SingleProject";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/explore",
      element: (
        <AuthProvider>
          <div className="w-full h-screen bg-slate-950 items-center">
            <ExploreProjects />
          </div>
        </AuthProvider>
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
    {
      path: "/project/:id",
      element: <SingleProject />,
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
