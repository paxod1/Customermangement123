import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import AdminHome from './Admin/AdminHome';
import AdminLogin from './Admin/AdminLogin';
import AdminSignup from './Admin/AdminSignup';

function App() {

  const logininfom = useSelector((state) => state.userlogin?.LoginInfo[0]);
  console.log("from app.js logininfom", logininfom);

  const Adminlogininfom = useSelector((state) => state.adminLogin?.LoginInfo[0]);


  const token = logininfom?.Token;
  const Admintoken = Adminlogininfom?.Token;

  const app = createBrowserRouter([
    {
      path: "/",
      element: token ? <Home /> : <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
    
    // admin pages routers
    
    ,{
      path: "/Admin",
      element: Admintoken ? <AdminHome /> : <AdminLogin />
    },
    {
      path: '/Adminsignup',
      element: <AdminSignup />
    }
  ])
  return (
    <div>
      <RouterProvider router={app} />
    </div>
  )
}

export default App