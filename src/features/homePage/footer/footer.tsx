import './footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faPhoneAlt, faEnvelope, IconName} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {homeMenu} from "../../../constants/navigation/home-menu.routes.tsx";
import {RoutesInterface} from "../../../interfaces/routes.Interface.tsx";
import {Link} from "react-router-dom";

const customInfo = (title: string, text?: string, iconName?: IconName | IconProp, isLink?: boolean, linkTo?: string) => {

    const handleLink = !isLink ?
        <>
          <span className={`fw-medium`}>
            <small>{iconName ? <FontAwesomeIcon icon={iconName}/> : ''} {text}</small>
          </span>
        </> :
        <>
            <a className="custom-link fw-medium"
               href={linkTo}><small>{iconName ? <FontAwesomeIcon icon={iconName}/> : ''}&nbsp;{text}</small>
            </a>
        </>

    return (
        <div className='mb-4'>
            <h4 className="text-upepercase fw-bold mb-4">
                <span className="badge badge-primary text-black bg-white">{title}</span>
            </h4>
            {text ? handleLink : ''}
        </div>
    )
}

const customMenuList = (
    <ul className={'list-unstyled'}>
        {homeMenu.map((items: RoutesInterface, index) => (
            <li className={'mt-2'} key={index}>
                <Link className={`fw-medium custom-link `} to={`${items.href}`}>
                    <small>{items.title}</small>
                </Link>
            </li>
        ))}
    </ul>
)

const customLink = (link: string, text?: string, iconName?: IconName | IconProp) => (
    <a className="custom-link btn btn-outline-light btn-social mx-1 mb-4"
       href={link}><small>{iconName ? <FontAwesomeIcon icon={iconName}/> : ''}&nbsp;{text}</small>
    </a>
)


function Footer() {
    return (
        <div>
            <footer className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            {customInfo('Beirut Bay Restaurants', `
                            If you’re looking for a truly traditional Lebanese cuisine, BeirutBay is the place to
                                go. Our restaurants offer a wide variety of Lebanese dishes, all of which are cooked to
                                perfection.
                            `)}
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            {customInfo('Menu')}
                            {customMenuList}
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            {customInfo('Contact')}
                            {customLink('https://www.facebook.com/BeirutBay.Mt', 'Facebook', faFacebookF)}
                            {customLink('https://www.instagram.com/beirutbay.mt', 'Instagram', faInstagram)}
                            {customInfo('Call US', '356 79544335', faPhoneAlt, true, 'https://wa.link/n770gv')}
                            {customInfo('Send Email', 'info@beirutbayrestaurants.com', faEnvelope, true, 'mailto:info@beirutbayrestaurants.com')}
                        </div>

                    </div>
                </div>
            </footer>

            <div className="copyright-container py-4 text-center text-white">
                <div className="container"><small>&copy; BeirutBay 2024</small></div>
            </div>

        </div>
    );
}

export default Footer;