import React, { useState, useEffect } from 'react';
import '../styles/section.css';
import Header from './header';
import NavBar from './nav_bar';
import Footer from './footer';

// Section 컴포넌트 정의
function Section() {
  // 슬라이드의 현재 인덱스를 저장하는 상태 변수
  const [currentSlide, setCurrentSlide] = useState(0);
  // 슬라이드쇼가 일시정지 상태인지 저장하는 상태 변수
  const [isPaused, setIsPaused] = useState(false);

  // 슬라이드 데이터 배열
  const slides = [
    {
      id: 1,
      title: "신간도서",
      subtitle: "올 한 해 가장 사랑받은 책",
      year: "2025",
      image: "/images/weekly_best/1.jpg", // 트로피 이미지 경로
      bgColor: "#f6f5ef",
      tag: "Special"
    },
    {
      id: 2,
      title: "신간도서",
      subtitle: "올 한 해 가장 사랑받은 책을 추천한다면?",
      year: "2025",
      image: "./images/godNeeds.jpg", // 트로피 이미지 경로
      bgColor: "#f6f5ef",
      tag: "Special"
    },
    {
      id: 3,
      title: "신간도서",
      subtitle: "올 한 해 가장 사랑받은 책은 뭘까?",
      year: "2025",
      image: "/images/lifeStudy.jpg", // 트로피 이미지 경로
      bgColor: "#f6f5ef",
      tag: "Special"
    },
    // 추가 슬라이드 데이터...
  ];

  // 슬라이드 자동 전환을 위한 useEffect 훅
  useEffect(() => {
    let interval;
    if (!isPaused) {
      // 2초마다 슬라이드 전환
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 2000);
    }
    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // 특정 슬라이드로 이동하는 함수
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 초를 분:초 형식으로 변환하는 함수
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <>
      <section className="carousel-section">
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)} // 마우스가 들어오면 슬라이드쇼 일시정지
          onMouseLeave={() => setIsPaused(false)} // 마우스가 나가면 슬라이드쇼 재개
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`} // 현재 슬라이드에 'active' 클래스 추가
              style={{ 
                backgroundColor: slide.bgColor,
                color: '#000000'
              }}
            >
              <div className="slide-content">
                <div className="text-content">
                  <span className="tag">{slide.tag}</span>
                  <h2 className="title">{slide.title}</h2>
                  <p className="subtitle">{slide.subtitle}</p>
                  <div className="year">{slide.year}</div>
                </div>
                <div className="image-content">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </div>
          ))}

          {/* 컨트롤 버튼 */}
          <div className="carousel-controls">
            <button 
              className="pause-button"
              onClick={() => setIsPaused(!isPaused)} // 일시정지/재개 버튼
            >
              {isPaused ? "▶" : "II"}
            </button>
            <div className="progress-container">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`progress-dot ${index === currentSlide ? 'active' : ''}`} // 현재 슬라이드에 'active' 클래스 추가
                  onClick={() => goToSlide(index)} // 특정 슬라이드로 이동
                />
              ))}
            </div>
            <div className="timer">
              {formatTime(33)} 전체보기
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
