import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="top-slider">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 banner" src="/img/jean.jpg" alt="First slide" />
          <Carousel.Caption>
            <Link to="/jean">
              <button className="jeans-btn"> SHOP NOW</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src= "/img/shoes.jpg"
            alt="Second slide"/>
          <Carousel.Caption>
            <Link to="/shoes">
              <button className="shoes-btn"> SHOP NOW</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 banner" src="/img/shirt.jpg" alt="Third slide" />
          <Carousel.Caption>
            <Link to="/shirt">
              {" "}
              <button className="shirt-btn" style={{marginRight:"0px",marginBottom:"10px" }}> SHOP NOW</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
