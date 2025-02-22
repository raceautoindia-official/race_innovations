import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import Pro from "./Pro";
import Service from "./Service";
import Serve from "./Serve";
import Why from "./Why";




function Product() {
  return (
    <>
    <Navbar/>
    <Pro/>
    <Service/>
    <Serve/>
    <Why/>
    <Footer/>
    </>
  );
}

export default Product;
