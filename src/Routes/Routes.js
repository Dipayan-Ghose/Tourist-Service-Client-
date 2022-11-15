import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Main/Main";
import Services from "../Pages/Services/Services";
import OurVision from "../Pages/OurVision/OurVision";
import Location from "../Pages/Location/Location";
import Blog from "../Pages/Blog/Blog";

export const routes= createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/vision',
                element: <OurVision></OurVision>
            },
            {
                path: '/location',
                element: <Location></Location>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
           


        ]
    }

])