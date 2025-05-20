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
import CompanySetup from "./pages/CompanySetup";
import AdminJobsApplicant from "./pages/AdminJobsApplicant";
import Createjobs from "./pages/Createjobs";

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
        element: (
          <ProtectedRoute>
            <CompanySetup />
          </ProtectedRoute>
        ),
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
            <Createjobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/jobs:id/applicant",
        element: (
          <ProtectedRoute>
            <AdminJobsApplicant />
          </ProtectedRoute>
        ),
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
