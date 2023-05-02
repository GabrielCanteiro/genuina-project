import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css"
import { Link } from "react-router-dom";


const Slide = () => {

  const banners = {
    banner_1:{url:"https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80"},
    banner_2:{url:"https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80"},
    banner_3:{url:"https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80"},
    
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="slider__container">
      <Slider {...settings} >
      <div>
          <img src={banners.banner_1.url}/>
      </div>
      <div>
          <img src={banners.banner_1.url}/>
      </div>
      <div>
          <img src={banners.banner_1.url}/>
      </div>
      <div>
          <img src={banners.banner_1.url}/>
      </div>

      </Slider>
    </div>
  )
}

export default Slide