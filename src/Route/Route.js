import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import Courese from "../Pages/Courses/Courese";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Login from "../Pages/Login/Login";
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
            loader : ()=> fetch('http://localhost:5000/courses/')
            
        },

        {
            path: '/details/:id',
            element: <CourseDetails />,
            loader: async ({params}) =>{
                return fetch(`http://localhost:5000/courses/${params.id}`)
              },
            
        },
        {
            path: '/category/:id',
            element: <Category />,
            loader : ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            
            
        
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
        }
    
    ]
    
   }
   
])