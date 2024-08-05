import {Route, Routes} from "react-router-dom";
import Navbar from "../navbar/navbar.tsx";
import Footer from "../footer/footer.tsx";
import Menu from "../menu/menu.tsx";
import Gallery from "../gallery/gallery.tsx";
import Events from "../events/events.tsx";
import Bookings from "../bookings/bookings.tsx";
import MainPage from "../main-page/main-page.tsx";
import './home.css'
import Contact from "../contact/contact.tsx";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <section className="d-block">
                <div className="mt-5">
                    <Routes>
                        <Route path="*" element={<MainPage/>}></Route>
                        <Route path="menu" element={<Menu/>}></Route>
                        <Route path="gallery" element={<Gallery/>}></Route>
                        <Route path="events" element={<Events/>}></Route>
                        <Route path="booking" element={<Bookings/>}></Route>
                        <Route path="contact" element={<Contact/>}></Route>
                    </Routes>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default Home;