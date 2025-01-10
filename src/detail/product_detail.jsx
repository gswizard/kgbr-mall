import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom'; // react-medium-image-zoom 추가
import 'react-medium-image-zoom/dist/styles.css'; // react-medium-image-zoom 스타일 추가
import '../styles/product_detail.css';
import Header from '../main/header'; // header.jsx 추가
import Footer from '../main/footer'; // footer.jsx 추가
import NavBar from '../main/nav_bar'; // nav_bar.jsx 추가

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('detail');

  // 상품 정보 데이터
  const product = {
    id: 1,
    category: {
      main: '국내도서',
      sub: '---',
      sub2: '---',
      sub3: '---'
    },
    title: "석류 꽃이 피었는지",
    author: "",
    publisher: "한국복음서우너",
    publishDate: "2024년 12월 24일",
    rating: 0,
    reviewCount: 0,
    price: 20000,
    salePrice: 18000,
    discount: 10,
    point: 850,
    images: [
      "../images/202412261108232088144627.jpg",
    ],
    description: "한국문학의 미래, 『진 개의 파란』,『이끼』 전선란 신작 소설",
    delivery: {
      type: "무료",
      info: "(해외배송의 경우 지역에 따라 상이)",
      address: "서울특별시 강남구 강남대로 542(논현동, 영풍빌딩)",
      date: "지금 택배 주문하면 12월 30일 출고 가능"
    }
  };

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calculateTotalPrice = () => {
    return formatPrice(product.salePrice * quantity);
  };

  return (
    <>
      <Header /> {/* Header 컴포넌트 추가 */}
      <NavBar /> {/* NavBar 컴포넌트 추가 */}

      <div className="product-detail-container">
        {/* 상단 네비게이션 */}
        <div className="navigation-path">
          <Link to="/" className="home-icon">홈</Link>
          <span className="separator">›</span>
          <Link to="/category/domestic-book">{product.category.main}</Link>
          <span className="separator">›</span>
          <Link to="/category/novel">{product.category.sub}</Link>
          <span className="separator">›</span>
          <Link to="/category/korean-novel">{product.category.sub2}</Link>
          <span className="separator">›</span>
          <Link to="/category/domestic-novel">{product.category.sub3}</Link>
        </div>

        {/* 상품 기본 정보 섹션 */}
        <div className="product-basic-info">
          {/* 이미지 섹션 */}
          <div className="product-gallery">
            <div className="main-image">
              <Zoom>
                <img src={product.images[0]} alt={product.title} />
              </Zoom>
            </div>
          </div>

          {/* 상품 정보 섹션 */}
          <div className="product-info">
            {/* 상품 태그 */}
            <div className="product-tags">
              <span className="tag md">MD추천</span>
              <span className="tag best">베스트</span>
              <span className="tag event">이벤트</span>
              <span className="tag sale">소득공제</span>
            </div>

            {/* 상품명과 기본 정보 */}
            <h1 className="product-title">{product.title}</h1>
            <div className="product-meta">
              <span>{product.author} 저</span>
              <span className="separator">|</span>
              <span>{product.publisher}</span>
              <span className="separator">|</span>
              <span>{product.publishDate}</span>
            </div>

            {/* 평점 */}
            <div className="product-rating">
              <div className="stars">
                {[1,2,3,4,5].map(star => (
                  <span key={star} className="star">★</span>
                ))}
              </div>
              <span className="rating">{product.rating}</span>
              <span className="review-count">리뷰 {product.reviewCount}개</span>
            </div>

            {/* 가격 정보 */}
            <div className="price-info">
              <div className="price-row">
                <span className="sale-price">{formatPrice(product.salePrice)}원</span>
                <span className="original-price">{formatPrice(product.price)}</span>
                <span className="discount">({product.discount}% 할인)</span>
              </div>
              <div className="point-info">
                <span className="point-label">적립금</span>
                <span className="point-value">{product.point}원 (5% 적립)</span>
              </div>
            </div>

            {/* 배송 정보 */}
            <div className="delivery-info">
              <div className="delivery-row">
                <span className="label">배송비</span>
                <div className="value">
                  <span className="delivery-type">{product.delivery.type}</span>
                  <span className="delivery-detail">{product.delivery.info}</span>
                </div>
              </div>
              <div className="delivery-row">
                <span className="label">배송안내</span>
                <div className="value">
                  <span className="delivery-address">{product.delivery.address}</span>
                  <button className="location-button">지역변경</button>
                </div>
              </div>
              <div className="delivery-date">
                <span className="badge quick">택배배송</span>
                {product.delivery.date}
              </div>
              <div className="delivery-service">
                <span className="badge naver">나우드림</span>
                <span>택배보다 빠른 배장 픽업 서비스</span>
                <button className="service-info">영업점 제고 및 위치 확인</button>
              </div>
            </div>

            {/* 수량 선택 */}
            <div className="quantity-section">
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <span className="total-price">{calculateTotalPrice()}원</span>
            </div>

            {/* 구매 버튼 */}
            <div className="purchase-buttons">
              <button className="cart-button">장바구니</button>
              <button className="buy-button">바로구매</button>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer 컴포넌트 추가 */}
    </>
  );
}

export default ProductDetail;