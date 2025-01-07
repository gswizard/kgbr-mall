import React, { useState } from 'react';
import '../styles/product_list.css';

function ProductList() {
  const [sortOption, setSortOption] = useState('newest');
  const [viewType, setViewType] = useState('grid');

  const products = [
    {
      id: 1,
      image: "/images/products/1.jpg",
      title: "울뉴굿데이성경 초미니 개역개정 새찬송가",
      originalPrice: 30000,
      salePrice: 27000,
      isNew: true,
      isBest: true,
      description: "휴대하기 편한 초미니 사이즈의 성경입니다."
    },
    {
      id: 2,
      image: "/images/products/2.jpg",
      title: "ESV한영해설성경 원단 다크블루",
      originalPrice: 53000,
      salePrice: 47700,
      isBest: true,
      description: "ESV 영문과 개역개정 한글 대조 성경입니다."
    },
    // ... 더 많은 상품 데이터
  ];

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // 정렬 로직 구현
  };

  const handleViewTypeChange = (type) => {
    setViewType(type);
  };

  return (
    <div className="product-list-container">
      {/* 상단 필터 영역 */}
      <div className="filter-section">
        <div className="view-options">
          <button
            className={`view-type-btn ${viewType === 'grid' ? 'active' : ''}`}
            onClick={() => handleViewTypeChange('grid')}
          >
            격자보기
          </button>
          <button
            className={`view-type-btn ${viewType === 'list' ? 'active' : ''}`}
            onClick={() => handleViewTypeChange('list')}
          >
            목록보기
          </button>
        </div>
        <div className="sort-options">
          <select value={sortOption} onChange={handleSortChange}>
            <option value="newest">최신순</option>
            <option value="priceAsc">가격 낮은순</option>
            <option value="priceDesc">가격 높은순</option>
            <option value="popular">인기순</option>
          </select>
        </div>
      </div>

      {/* 상품 목록 */}
      <div className={`product-grid ${viewType}`}>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
              {product.isNew && <span className="badge new">NEW</span>}
              {product.isBest && <span className="badge best">BEST</span>}
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">
                {product.originalPrice !== product.salePrice && (
                  <span className="original-price">
                    {formatPrice(product.originalPrice)}원
                  </span>
                )}
                <span className="sale-price">
                  {formatPrice(product.salePrice)}원
                </span>
              </div>
              <div className="product-actions">
                <button className="cart-button">장바구니</button>
                <button className="like-button">♡</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button className="page-btn prev">이전</button>
        <div className="page-numbers">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span>...</span>
          <button className="page-btn">10</button>
        </div>
        <button className="page-btn next">다음</button>
      </div>
    </div>
  );
}

export default ProductList; 