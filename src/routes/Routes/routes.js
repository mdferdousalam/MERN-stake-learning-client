import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import Details from "../../components/Courses/Details";
import ErrorPage from "../../components/ErrorPage";
import Faq from "../../components/FAQ/Faq";
import Home from "../../components/Home";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Profile from "../../components/UserProfile/Profile";
import Main from "../../layout/Main";
import PrivateRoute from "../privateRoutes/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b610-lerning-platform-server-side-mauve.vercel.app/subjects')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://b610-lerning-platform-server-side-mauve.vercel.app/subjects')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-mauve.vercel.app/subjects/${params.id}`)
            },
            {
                path: '/course/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-mauve.vercel.app/subjects/${params.id}`)

            }
        ]

    }
])