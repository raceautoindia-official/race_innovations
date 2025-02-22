import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from 'react';
import Investors from "./Investor";
import Corporate from "./Corporate";

function InvestorsPage() {
  return (
    <>
      <Navbar />
      <Investors />
      <Corporate/>
      <Footer />
    </>
  );
}

export default InvestorsPage;
