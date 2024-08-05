import './admin.css';
import {RoutesInterface} from "../../../interfaces/routes.Interface.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {
    faBars,
    faUserAlt,
    faUserCog,
    faPhotoFilm,
    faCalendarDay,
    faBook,
    faSignOut
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import AdminReservations from "../admin-reservations/admin-reservations.tsx";
import AdminEvents from "../admin-events/admin-events.tsx";
import AdminUsers from "../admin-users/admin-users.tsx";
import AdminGallery from "../admin-gallery/admin-gallery.tsx";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import Button from "../../../components/button/button.tsx";


const dashboardRoutes: RoutesInterface[] = [
    {
        href: 'admin',
        title: 'Admin',
        icon: faUserCog,
    },
    {
        href: 'reservations',
        title: 'Reservations',
        icon: faBook,
    },
    {
        href: 'events',
        title: 'Events',
        icon: faCalendarDay
    },
    {
        href: 'users',
        title: 'Users',
        icon: faUserAlt
    },
    {
        href: 'gallery',
        title: 'Gallery',
        icon: faPhotoFilm
    },
]

function Admin() {

    const location = useLocation();
    const {pathname} = location;

    const [openSidebar, setOpenSidebar] = useState(false);

    function handleSidebar() {
        setOpenSidebar(!openSidebar);
    }

    function getCurrentLocation(text: string): string {
        return text.slice(text.lastIndexOf('/') + 1).toUpperCase();
    }

    return (
        <div className="wrapper-container">
            <div className={`sidebar-container ${openSidebar ? 'expand' : ''}`}>
                <div className="d-flex">
                    <button className="button-sidebar" onClick={handleSidebar}>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                    <div className="sidebar-title">
                        <a href="#">Beirut Admin</a>
                    </div>
                </div>
                <ul className="sidebar-tabs">
                    {dashboardRoutes.map((route: RoutesInterface, index: number) => (
                        <li key={index} className="sidebar-item">
                            <Link className="sidebar-link" key={index} to={`${route.href}`}>
                                <FontAwesomeIcon icon={route.icon as IconDefinition}/>&nbsp; {route.title.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main-dashboard">
                <nav className="navbar navbar-expand nabvar bg-white px-4 py-3 shadow-lg mb-5 bg-white rounded">
                    <div className="container-fluid">
                        <strong>
                            {getCurrentLocation(pathname)}
                        </strong>
                        <Button
                            icon={faSignOut}
                            onClick={() => console.log('Logout')}/>
                    </div>

                </nav>
                <main className="main-dashboard-content">
                    <div className="card container-fluid mb-3 shadow-lg p-3 mb-5 bg-white rounded">
                        <Routes>
                            <Route path="reservations" element={<AdminReservations/>}></Route>
                            <Route path="events" element={<AdminEvents/>}></Route>
                            <Route path="users" element={<AdminUsers/>}></Route>
                            <Route path="gallery" element={<AdminGallery/>}></Route>
                        </Routes>
                    </div>
                </main>
                <footer className="footer-dashboard">
                    <div className="container-fluid">
                        <div className="row text-body-secondary">
                            <div className="col-6 text-start ">
                                <a className="text-body-secondary" href=" #">
                                    <strong>Beirut Restaurants Admin</strong>
                                </a>
                            </div>
                            <div className="col-6 text-end text-body-secondary d-none d-md-block">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a className="text-body-secondary" href="#">2024</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Admin;