
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import PostedJobs from './pages/Postedjobs';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/signup",
        element:<Signup/>
      },{
        path:"/login",
        element:<Signin/>
      },{
        path:"/jobs",
        element:<PostedJobs/>
      }
    ]
  }
])

export default appRouter;
