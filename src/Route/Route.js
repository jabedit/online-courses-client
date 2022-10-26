import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Courese from "../Pages/Courses/Courese";
import LeftSideBar from "../Pages/LeftSideBar/LeftSideBar";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
            path: '/category/:id',
            element: <Category />,
            loader : ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            
            
        
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register />
        }
    ]
    
   }
   
])