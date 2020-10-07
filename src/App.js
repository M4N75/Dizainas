import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./base.css"
import "./response.css"

import Header from "./components/header/header"
import FirstSection from "./components/Fsection/section"
import SecondSection from "./components/Ssection/section"
import ThirdSection from "./components/Tsection/section"
import LastSection from "./components/Lsection/section"
import Footer from "./components/footer/footer"

export default function App() {
  return (
    <>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <LastSection/>
      <Footer/>
    </>
  );
}
