import React from 'react';
import Slider from './slider';
import industry from './industry';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Industry from './industry';
import Partner from './Partner';
import Product from './Product';
import Intellect from './Intellect';
import Connect from './Connect';
import Lbi from './Lbi';
import Legal from './Legal';
import Certifications from './Certifications';
import Cisme from './Cisme';
import Testimonial from './Testimonial';
import Client from './Client';
import Connected from './Connected';
import Testimonial_v2 from './Testimonial-v2';

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Industry/>
      <Partner/>
      <Product/>
      {/* <Intellect/>
        <Connect/> */}
        <Lbi/>
        <Legal/>
         <Certifications/>
        <Cisme/> 
        {/* <Testimonial/> */}
        <Testimonial_v2/>
        <Client/>
        <Connected/>
      <Footer />

    </>
  );
};

export default Home;
