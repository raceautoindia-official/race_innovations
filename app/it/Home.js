  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import React from 'react';
  import It from "./It";
  import Ttl from "./Ttl";
  import Crm from "./Crm";
  import Digital from "./Digital";
  import Mining from "./Mining";






  function Itpage() {
    return (
      <>
        <Navbar />
        <It />
        <div id="ttl">
          <Ttl />
        </div>
        <div id="crm">
          <Crm />
        </div>
        <div id="digital">
          <Digital />
        </div>
        <div id="mining">
          <Mining />
        </div>
        <Footer />
      </>
    );
  }
  

  export default Itpage;
