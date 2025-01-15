import React, { useState } from 'react';
import '../styles/nav_bar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        {/* 상단 앱 바 영역 */}
        <div className="app-bar">
          <div className="app-bar-container">
            <div className="app-bar-content">
              {/* 로고 영역 */}
              <div className="logo-container">
                <a href="/">
                  <img src="/logo_kgbr.svg" alt="한국복음서원" className="logo" />
                </a>
              </div>

              {/* 검색창 영역 */}
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="시편 128:1-2: 여호와를 경외하며 그분의 길들을 따르는 이들은 모두 복이.."
                />
                {/* 검색 버튼 */}
                <button className="search-button">
                  <svg
                    className="search-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* 오른쪽 배너 영역 */}
              <div className="banner">
                <div className="banner-content">
                  <img
                    src="./images/202412261108232088144627.jpg"
                    alt="섞류 꽃이 피었는지"
                    className="banner-image"
                  />
                  <div className="banner-text">
                    <p className="banner-title">섞류 꽃이 피었는지</p>
                    <p className="banner-description">여기 꽃이 피었습니다</p>
                    <p className="banner-price">20,000원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 네비게이션 바 영역 */}
        <nav className="nav-bar">
          <div className="nav-container">
            {/* 왼쪽 메뉴 영역 */}
            <div className="left-menu">
              {/* 드롭다운 메뉴 */}
              <div className="dropdown">
                <button 
                  className="menu-button"
                  onClick={handleMenuClick}
                  aria-expanded={isMenuOpen ? "true" : "false"}
                >
                  <span className="menu-icon">☰</span>
                  전체 카테고리
                </button>
                {/* 드롭다운 메뉴 아이템 */}
                <ul className="dropdown-menu" 
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                  style={{display: isMenuOpen ? 'block' : 'none'}}>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>국내도서</a></li>
                  <li><a href="/list/product_list.jsx">국내도서</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>베스트</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>신상품</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>추천</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>전자책</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>오디오</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>용품</a></li>
                </ul>
              </div>
              {/* 메인 메뉴 */}
              <ul className="main-menu">
                <li><a href="#" onClick={(e) => e.preventDefault()}>국내도서</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>베스트</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>신상품</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>추천</a></li>
              </ul>
            </div>

            {/* 오른쪽 메뉴 영역 */}
            <ul className="right-menu">
              <li><a href="#" onClick={(e) => e.preventDefault()}>이벤트</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>출석체크</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
