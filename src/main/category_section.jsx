import React from "react";
import "../styles/category_section.css";
import Header from './header';
import NavBar from './nav_bar';
import Footer from './footer';

function CategorySection() {
  const categories = [
    { id: 1, icon: "📚", label: "도서" },
    { id: 2, icon: "📱", label: "전자책" },
    { id: 3, icon: "📀", label: "오디오" },
    { id: 4, icon: "🎁", label: "용품" }
  ];

  return (
    <>
      <div className="category-section">
        {/* 카테고리 네비게이션 */}
        <div className="category-nav">
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id} className="category-item">
                <a href="#" className="category-link">
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-label">{category.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CategorySection;
