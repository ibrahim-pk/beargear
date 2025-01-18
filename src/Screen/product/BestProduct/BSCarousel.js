// components/BestSellerCarousel.js
import { Carousel } from 'antd';
import ProductCard from './ProductCard';

const BestSellerCarousel = ({ bestSellers }) => {
  return (
    <div style={{display:'flex',gap:"10px"}} className="responsive-carousel">
      {bestSellers.map((product, index) => (
          <div className="carousel-item" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
    </div>
  );
};

export default BestSellerCarousel;
