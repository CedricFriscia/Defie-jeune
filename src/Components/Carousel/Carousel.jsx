import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./styles.scss";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide ">
          <img src="carousel/PHOTO-2023-12-11-15-11-34.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img
            className="portrait"
            src="public/carousel/PHOTO-2023-12-11-15-14-01.jpg"
            alt=""
          />
        </div>
        <div className="embla__slide">
          <img src="carousel/PHOTO-2023-12-11-15-05-55.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="carousel/PHOTO-2023-12-11-15-05-55 (1).jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="carousel/PHOTO-2023-12-11-15-05-54.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img
            className="portrait"
            src="carousel/PHOTO-2023-12-11-15-05-54 (2).jpg"
            alt=""
          />
        </div>

        <div className="embla__slide">
          <img
            className="portrait"
            src="carousel/PHOTO-2023-12-11-15-05-53.jpg"
            alt=""
          />
        </div>
        <div className="embla__slide">
          <img src="carousel/PHOTO-2023-12-11-15-05-53 (1).jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="carousel/PHOTO-2023-12-11-15-05-52.jpg" alt="" />
        </div>

        <div className="embla__slide">
          <img src="carousel/dej.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img className="portrait" src="carousel/defipic.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
