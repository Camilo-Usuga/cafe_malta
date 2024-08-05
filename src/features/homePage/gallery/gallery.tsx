import images from "../../../assets/img/logos/beirut-shop-pictures/index";
import "./gallery.css";

function Gallery() {
  return (
    <div className="section-container mt-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="src/assets/img/logos/beirut-shop-pictures/beirut-48.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="src/assets/img/logos/beirut-shop-pictures/beirut-35.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="src/assets/img/logos/beirut-shop-pictures/beirut-18.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="src/assets/img/logos/beirut-shop-pictures/beirut-41.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="src/assets/img/logos/beirut-shop-pictures/beirut-12.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="src/assets/img/logos/beirut-shop-pictures/beirut-55.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
          {console.log(images)}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
