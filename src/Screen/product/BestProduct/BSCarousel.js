// components/BestSellerCarousel.js
import { Carousel } from 'antd';
import ProductCard from './ProductCard';

const BestSellerCarousel = ({ bestSellers }) => {
  return (
    <div className="responsive-carousel">
      <Carousel  autoplay
        slidesToShow={4} // Default for large devices
        responsive={[
          {
            breakpoint: 992, // Medium devices (tablets)
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576, // Small devices (phones)
            settings: {
              slidesToShow: 2,
            },
          },
        ]}>
        {bestSellers.map((product, index) => (
          <div className="carousel-item" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BestSellerCarousel;
