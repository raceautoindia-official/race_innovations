import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import Front from "./Front";
import Advisory from "./Advisory";
import Legal from "./Legal";
import Last from "./Last";



function AccountPage() {
  return (
    <>
    <Navbar/>
      <Front/>
      <Advisory/>
      <Legal/>
      <Last/>
      <Footer/>
      
    </>
  );
}

export default AccountPage;
