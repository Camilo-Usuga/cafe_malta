import './App.css'
import Home from "./features/homePage/home/home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Admin from "./features/adminPage/admin/admin.tsx";
import NotFound from "./components/not-found/not-found.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: 'menu',
                element: `<div>Menu</div>`
            },
            {
                path: 'events',
                element: `<div>Events</div>`
            },
            {
                path: 'gallery',
                element: `<div>Gallery</div>`
            },
            {
                path: 'booking',
                element: `<div>Booking</div>`
            },
            {
                path: 'contact',
                element: `<div>contact</div>`
            },

        ]
    },
    {
        path: "/admin",
        element: <Admin/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: 'reservations',
                element: `<div>reservations</div>`
            },
            {
                path: 'events',
                element: `<div>events</div>`
            },
            {
                path: 'users',
                element: `<div>user</div>`
            },
            {
                path: 'gallery',
                element: `<div>gallery</div>`
            },
        ]
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
