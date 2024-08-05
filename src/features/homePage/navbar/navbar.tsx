import {useState} from 'react';
import logo from '../../../assets/img/logos/beirut-bay-logo-1.png';
import './navbar.css'
import {RoutesInterface} from "../../../interfaces/routes.Interface.tsx";
import {homeMenu} from "../../../constants/navigation/home-menu.routes.tsx";
import {Link} from "react-router-dom";

const Navbar = () => {

    const [openDropdown, setDropdown] = useState(true);

    function toggleMenu() {
        setDropdown(!openDropdown)
    }

    return (
        <nav className="navbar beirut-navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={logo} alt="beirut-logo" className="logo"/>
                </a>

                <div className="dropdown">
                    <a href="#" className="toggle-button dropbtn" onClick={toggleMenu}>
                        &#9776;
                    </a>
                    <div id="dropdown-window" className={`dropdown-content ${openDropdown ? 'dropdown-hidden' : ''}`}>
                        <div className="container p-5">
                            {homeMenu.map((items: RoutesInterface, index) => (
                                <Link key={index} onClick={toggleMenu} to={`${items.href}`}>{items.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;