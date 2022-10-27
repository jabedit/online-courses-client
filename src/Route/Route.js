import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import CheckOute from "../Pages/CheckOut/CheckOute";
import Courese from "../Pages/Courses/Courese";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/not-found/PageNotFound";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main />,
    children: [
        
        {
            path: '/',
            element: <Courese />,
            loader : ()=> fetch('https://educational-website-server-eight.vercel.app/courses/')
            
        },

        {
            path: '/details/:id',
            element: <CourseDetails />,
            loader: async ({params}) =>{
                return fetch(`https://educational-website-server-eight.vercel.app/courses/${params.id}`)
              },
            
        },
        {
            path: '/category/:id',
            element: <Category />,
            loader : ({params})=> fetch(`https://educational-website-server-eight.vercel.app/category/${params.id}`)
            
            
        
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }, 
        {
            path: '/blog',
            element: <PrivateRoute><Blog /></PrivateRoute>
        },
        {
            path: '/checkOut/:id',
            element: <PrivateRoute><CheckOute /></PrivateRoute>,
            loader: async ({params}) =>{
                return fetch(`https://educational-website-server-eight.vercel.app/courses/${params.id}`)
              },
        },
        

    
    ]
    
   },
   {
    path : '*',
    element: <PageNotFound />
  }
   
])