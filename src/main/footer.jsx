import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          {/* 고객센터 정보 */}
          <div className="customer-service">
            <h3>고객센터</h3>
            <div className="phone-number">1600-3191</div>
            <div className="service-time">
              <p>상담가능시간 <br></br>평일 08:00 ~ 16:00 <br></br>점심시간 12:00 ~ 13:00</p>
              <p>대표 메일 customer@kgbr.co.kr</p>
              <p>대량 주문 webmaster@kgbr.co.kr</p>
            </div>
            <div className="quick-links">
              <a href="#" onClick={(e) => e.preventDefault()}>FAQ</a>
              <a href="#" onClick={(e) => e.preventDefault()}>1:1고객상담</a>
            </div>
          </div>

          {/* 푸터 메뉴 */}
          <div className="footer-menu">
            <div className="menu-column">
              <h4>한국복음서원</h4>
              <ul>
                <li><a href="#">소개</a></li>
              </ul>
            </div>
            <div className="menu-column">
              <h4>쇼핑도우미</h4>
              <ul>
                <li><a href="#">도서검색</a></li>
                <li><a href="#">회원등급 혜택</a></li>
                <li><a href="#">주문/배송</a></li>
                <li><a href="#">취소/교환/환불</a></li>
                <li><a href="#">적립금 사용</a></li>
                <li><a href="#">교환권 사용</a></li>
                <li><a href="#">정약 철회</a></li>
              </ul>
            </div>
            <div className="menu-column">
              <h4>고객센터</h4>
              <ul>
                <li><a href="#">1:1 고객상담</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">공지사항</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">영상정보관리방침</a>
            <a href="#">청소년보호정책</a>
            <a href="#">이메일 무단 수집거부</a>
          </div>
          <div className="company-info">
            <p>
              <span>한국복음서원</span>
              <span>경기도 성남시 중원구 상대원동 190-1 SKn테크노파크 비즈센터 B210호 </span>
            </p>
            <p>
              <span>사업자등록번호 129-38-71911</span>
              <a href="#" className="business-info">사업자정보확인 </a>
              <span>통신판매번호 : 광진 제599호</span>
              <span>개인정보관리 책임자 : 이희득</span>
            </p>
          </div>
          <div className="copyright">
          COPYRIGHTⒸ 2006 KOREA GOSPEL BOOK ROOM. ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
