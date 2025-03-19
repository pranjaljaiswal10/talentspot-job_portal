import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PostedJobs from "./pages/Postedjobs";
import Browse from "./pages/Browse";
import Jobdescription from "./pages/Jobdescription";
import Profile from "./pages/Profile";
import Companies from "./pages/Companies";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateCompanies from "./pages/CreateCompanies";
import AdminJobs from "./pages/AdminJobs";
import CreateAdminJobs from "./pages/CreateAdminJobs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Signin />,
      },
      {
        path: "/jobs",
        element: <PostedJobs />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/description/:id",
        element: <Jobdescription />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/admin/companies",
        element: (
          <ProtectedRoute>
            <Companies />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/companies/create",
        element: (
          <ProtectedRoute>
            <CreateCompanies />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/companies/:id",
      },
      {
        path: "/admin/jobs",
        element: (
          <ProtectedRoute>
            <AdminJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/jobs/create",
        element: (
          <ProtectedRoute>
            <CreateAdminJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/jobs:id/applicant",
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
