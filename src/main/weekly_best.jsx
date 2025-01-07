import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/weekly_best.css';

function WeeklyBest() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: "/images/weekly_best/1.jpg",
      title: "석류 꽃이 피었는지",
      price: 20000,
      discount: 10,
      isNew: true
    },
    {
      id: 2,
      image: "/images/weekly_best/2.jpg",
      title: "ESV한영해설성경 원단 다크블루",
      price: 19000,
      discount: 10,
      isNew: true
    },
    {
      id: 3,
      image: "/images/weekly_best/3.jpg",
      title: "울뉴굿데이성경 초미니 개역개정 새찬송가",
      price: 12000,
      discount: 10,
      isNew: true
    },
    {
      id: 4,
      image: "/images/weekly_best/4.jpg",
      title: "성서원 NIV한영해설성경 중합본 개역개정",
      price: 25000,
      discount: 10,
      isNew: true
    },
    {
      id: 5,
      image: "/images/weekly_best/5.jpg",
      title: "아가페큰글성경 소합본 개역개정",
      price: 21000,
      discount: 10,
      isNew: true
    }
  ].map(product => ({
    ...product,
    originalPrice: `${product.price.toLocaleString()}원`,
    salePrice: product.price * (1 - product.discount/100)
  }));

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="weekly-best">
      <div className="weekly-best-container">
        <div className="section-header">
          <h2>주간 베스트</h2>
          <p className="subtitle">한 주간 가장 인기있는 상품들입니다.</p>
        </div>

        <div className="carousel-wrapper">
          <button 
            className="nav-button prev" 
            onClick={prevSlide}
            aria-label="이전 상품"
          >
            ‹
          </button>

          <div className="products-container">
            <div 
              className="products-slider"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => handleProductClick(product.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    {product.isNew && <span className="new-badge">NEW</span>}
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="product-price">
                      <span className="original-price">{product.originalPrice}</span>
                      <span className="sale-price">{product.salePrice}</span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <button 
                      className="cart-button"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <span>장바구니</span>
                    </button>
                    <button 
                      className="like-button"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <span>♡</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="nav-button next" 
            onClick={nextSlide}
            aria-label="다음 상품"
          >
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`${index + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeeklyBest; 
