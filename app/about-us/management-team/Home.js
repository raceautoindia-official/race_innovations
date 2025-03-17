import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from 'react';
import Mission from './Mission';
import Manage from './Manage';
import Message from "./Message";


function About() {
  return (
    <>
    <Navbar/>
      <Mission />
      <Manage/>
      {/* <Message/> */}
      <Footer/>
      
    </>
  );
}

export default About;
