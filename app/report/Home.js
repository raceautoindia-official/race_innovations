import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import ReportHome from "./ReportHome";
import Research from "./Research";
import Industries from "./Industries";
import Choose from "./Choose";












function Report() {
  return (
    <>
    <Navbar/>
    <ReportHome/>
    <Research/>
    <Industries/>
    <Choose/>
    <Footer/>
    </>
  );
}

export default Report;
