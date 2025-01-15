import React from "react";
import '../styles/header.css';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* 왼쪽 버튼 그룹 */}
            <div className="nav-list">
              <button className="nav-link">
                <span>⭐</span>
                <span>즐겨찾기</span>
              </button>
            </div>

            {/* 오른쪽 메뉴 그룹 */}
            <nav>
              <ul className="nav-list">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link">로그인</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link">장바구니</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link">주문조회</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link">비회원 배송조회</a></li>
                <li>
                  <button className="signup-button">회원가입</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
