import LandingPage from "./pages/LandingPage";
import ExploreProjects from "./pages/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./pages/Service";
<<<<<<< HEAD
=======
import Register from "./pages/Register";
import Login from "./pages/Login";
>>>>>>> 224b4b7b1b26f33d81c01ca0c5b026cc43010329

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
<<<<<<< HEAD
      path: "explore",
=======
      path: "/explore",
>>>>>>> 224b4b7b1b26f33d81c01ca0c5b026cc43010329
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
<<<<<<< HEAD
=======
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
>>>>>>> 224b4b7b1b26f33d81c01ca0c5b026cc43010329
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="w-full h-screen bg-slate-950 items-center"></div> */}
    </>
  );
}

export default App;
