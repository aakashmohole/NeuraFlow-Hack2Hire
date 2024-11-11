import LandingPage from "./pages/LandingPage";
import ExploreProjects from "./pages/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./pages/Service";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "explore",
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="w-full h-screen bg-slate-950 items-center"></div> */}
    </>
  );
}

export default App;
