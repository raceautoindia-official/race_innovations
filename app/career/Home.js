import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import CareerHome from "./CareerHome";
import Content from "./Content";
import Notify from "./Notify";




function CareersPage() {
  return (
    <>
      <Navbar />
    <CareerHome/>
    <Content/>
    <Notify/>
      <Footer />
    </>
  );
}

export default CareersPage;
