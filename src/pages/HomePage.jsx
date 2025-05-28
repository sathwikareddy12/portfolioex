import React from "react";
import Elements, { Button } from "../components/Elements";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Steps />
      <Footer />
    </div>
  );
}

export default HomePage;
