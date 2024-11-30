import LandingPage from "./pages/LandingPage";
import ExploreProjects from "./pages/Project";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Service from "./pages/Service";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import AuthProvider from "./components/custom/AuthProvider";
import SingleProject from "./pages/SingleProject";
import FreelancerServices from "./pages/Community/ClientProject";
import ProfileSection from "./pages/Authentication/Profile";
import ProfileUpdatePage from "./pages/Authentication/UpdateProfile";
import Forum from "./pages/Forum";
import CreateProject from "./pages/CreateProject";
import CreateChannel from "./pages/Community/CreateChannel";
import CommunityDashboard from "./pages/Community/CommunityDashboard";
import ChannelPage from "./pages/Community/ChannelPage";
import Webinar from "./pages/Webinar";
import WebinarDetails from "./pages/WebinarDetails";
import ClientSingleProject from "./pages/Client/ClientSingleProject";
import ClientDashboard from "./pages/Client/ClientDashboard";
import AdminRouteProvider from "./components/AdminRouteProvider";
import Events from "./pages/Events/Events";
import FreelancerRouteProvider from "./components/FreelancerRouteProvider";
import SingleService from "./pages/Client/SingleService";

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
        <AuthProvider>
          <div className="w-full h-screen bg-slate-950 items-center">
            <FreelancerRouteProvider>
              <ExploreProjects />
            </FreelancerRouteProvider>
          </div>
        </AuthProvider>
      ),
    },
    {
      path: "/services",
      element: (
        <AuthProvider>
          <FreelancerRouteProvider>
            <Service />
          </FreelancerRouteProvider>
        </AuthProvider>
      ),
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
      element: (
        <AuthProvider>
          <FreelancerRouteProvider>
            <SingleProject />
          </FreelancerRouteProvider>
        </AuthProvider>
      ),
    },
    {
      path: "/client",
      element: (
        <AuthProvider>
          <AdminRouteProvider>
            <FreelancerServices />
          </AdminRouteProvider>
        </AuthProvider>
      ),
    },
    {
      path: "/profile",
      element: (
        <AuthProvider>
          <ProfileSection />
        </AuthProvider>
      ),
    },
    {
      path: "/profile/update",
      element: (
        <AuthProvider>
          <ProfileUpdatePage />
        </AuthProvider>
      ),
    },
    {
      path: "/forum",
      element: (
        <AuthProvider>
          <Forum />
        </AuthProvider>
      ),
    },
    {
      path: "/create-project",
      element: (
        <AuthProvider>
          <AdminRouteProvider>
            <CreateProject />
          </AdminRouteProvider>
        </AuthProvider>
      ),
    },
    {
      path: "/create-channel",
      element: (
        <AuthProvider>
          <CreateChannel />
        </AuthProvider>
      ),
    },
    {
      path: "community",
      element: (
        <AuthProvider>
          <CommunityDashboard />
        </AuthProvider>
      ),
    },
    {
      path: "channel/:id",
      element: (
        <AuthProvider>
          <ChannelPage />
        </AuthProvider>
      ),
    },
    {
      path: "/webinar",
      element: <Webinar />,
    },
    {
      path: "/webinar/:id",
      element: <WebinarDetails />,
    },
    {
      path: "/client-dashboard",
      element: (
        <AuthProvider>
          <AdminRouteProvider>
            <ClientDashboard />
          </AdminRouteProvider>
        </AuthProvider>
      ),
    },
    {
      path: "/client-dashboard/:id",
      element: (
        <AuthProvider>
          <AdminRouteProvider>
            <ClientSingleProject />
          </AdminRouteProvider>
        </AuthProvider>
      ),
    },
    {
      path: "/client/:id",
      element: <SingleService />,
    },
    {
      path: "/events",
      element: <Events />,
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
