import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "../../Componets/caraousel/Image/data";
import styles from "./CarouselEffect.module.css"; // Corrected path

function CarouselEffect() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false} // Hides the status bar
        className={styles.carousel}
      >
        {img.map((imageItemLink, index) => (
          <div key={index} className={styles.slide}>
            <img
              src={imageItemLink}
              alt={`Slide ${index}`}
              className={styles.image}
            />
            <div className={styles.gradientOverlay}></div>{" "}
            {/* Gradient overlay */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
