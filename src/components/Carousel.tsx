import {SetStateAction, useState} from "react";
import {Carousel as BSCarousel} from "react-bootstrap";
import image2 from '../assets/random-images/unsamples/dguR--_J8rI.jpg';
import image3 from '../assets/random-images/unsamples/F582Uf0yML8.jpg';
import image5 from '../assets/random-images/unsamples/TKRXVyTBucw.jpg';
import '../styles/carousel.scss';


export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mm-carousel">
      <BSCarousel activeIndex={index} onSelect={handleSelect} className="mm-carousel">
        <BSCarousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
          />
          <BSCarousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </BSCarousel.Caption>
        </BSCarousel.Item>
        <BSCarousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Second slide"
          />
          <BSCarousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </BSCarousel.Caption>
        </BSCarousel.Item>
        <BSCarousel.Item>
          <img
            className="d-block w-100"
            src={image5}
            alt="Third slide"
          />
          <BSCarousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </BSCarousel.Caption>
        </BSCarousel.Item>
      </BSCarousel>
    </div>
  );
}
