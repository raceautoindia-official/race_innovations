import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import Contact from "./Contact";
import Office from "./Office";
import Form from "./Form";


function ContactPage() {
  return (
    <>
      <Navbar />
    <Contact/>
    <Office/>
    <Form/>
      <Footer />
    </>
  );
}

export default ContactPage;
