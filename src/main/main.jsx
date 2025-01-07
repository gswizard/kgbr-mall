import React from "react";
import Footer from "./footer";
import NavBar from "./nav_bar";
import Header from "./header";
import '../styles/main.css';
import Section from "./section";
import CategorySection from "./category_section";
import WeeklyBest from "./weekly_best";

function Main() {
  return (
    <div>
      <Header />
      <NavBar />
      <Section />
      <CategorySection />
      <WeeklyBest />
      <Footer />
    </div>
  );
}

export default Main;
