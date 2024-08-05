import './main-page.css'
import CardImageInfo from "../../../components/card-image/card-image.tsx";
import {LEFT, RIGHT} from "../../../constants/card-image/card-side.ts";

function MainPage() {
    return (
        <div className="main-page row">
            <section className="section-container">
                <div className="banner">
                    <video src="src/assets/videos/small-window-video.mp4" muted></video>
                </div>

             </section>


            <CardImageInfo
                img="src/assets/img/logos/beirut-shop-pictures/beirut-22.jpg"
                title="Beirut shop picture"
                description="Beirut shop picture"
                side={RIGHT}
            />

            <CardImageInfo
                img="src/assets/img/logos/beirut-shop-pictures/beirut-24.jpg"
                title="Beirut shop picture"
                description="Beirut shop picture"
                side={LEFT}
            />

        </div>

    );
}

export default MainPage;

