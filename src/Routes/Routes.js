import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Services from "../Pages/Services/Services";
import OurVision from "../Pages/OurVision/OurVision";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/SeviceDetails/ServiceDetails";
import OwnReview from "../Pages/OwnReview/OwnReview";
import AddService from "../Pages/AddService/AddService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes= createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                loader: ()=> fetch('http://localhost:5000/slider'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader:()=> fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader:({params})=>{
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/vision',
                element: <OurVision></OurVision>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
           {
            path: '/login',
            element: <Login></Login>
           },
            {
            path: '/register',
            element: <Register></Register>
           },
           {
            path: '/myReview',
            element: <PrivateRoute> <OwnReview></OwnReview></PrivateRoute>
           },
           {
            path: '/addService',
            element: <PrivateRoute> <AddService></AddService></PrivateRoute> 
           }


        ]
    }

])