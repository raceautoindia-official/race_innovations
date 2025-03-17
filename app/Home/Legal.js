  "use client";
  import Link from "next/link";
  import React from "react";
  import Image from "next/image";
  import { motion } from "framer-motion";

  function Legal() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container-fluid d-md-block"
      >
        <div className="container-fluid desktop-view">
          <div className="row justify-content-center">
          <motion.div className="col-sm-12 col-md-12 col-lg-4 text-center text-md-start legal-content"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 style={{ color: "#293BB1" }} className="mt-3">
                Legal
              </h1>
              <p className="mt-3">
              Most of the businesses faces many complex legal and commercial
                pressures when operating internationally that require the guidance
                of experienced and insightful advisors. Our member will guide you
                through the countless legal issues you may encounter whilst
                conducting business overseas. Our law firm members provide
                solutions in an efficient and seamless manner, giving you more
                time to focus on other facets of your business. Having worked
                across a wide range of industries, our member firms have the
                experience to understand your specific needs and become a trusted
                advisor to your business. With services ranging from employment
                law to international trade law, whatever support your business
                requires to be successful on the international stage, an RACE
                member firm can help.

              </p>
              <motion.button
                className="btn btn-outline-primary"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  width: "198.79px",
                  height: "45.72px",
                  borderRadius: "19.88px",
                  borderWidth: "0.99px",
                }}
              >
                <Link href="/accounting-and-legal" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More
                </Link>
              </motion.button>
              <motion.h1
                style={{ color: "#293BB1" }}
                className="mt-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Accounting
              </motion.h1>
              <p className="mt-3">
              Global business comes with complex legal and commercial
                challenges, but you don’t have to face them alone. Our expert law
                firm members provide seamless, strategic solutions, ensuring
                compliance and mitigating risks across borders. With our guidance,
                you can navigate international markets with confidence—freeing you
                to focus on growth and success

              </p>
              <motion.button
                className="btn btn-outline-primary mt-3"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  width: "198.79px",
                  height: "45.72px",
                  borderRadius: "19.88px",
                  borderWidth: "0.99px",
                }}
              >
                <Link href="/accounting-and-legal" style={{ textDecoration: "none", color: "inherit" }} className="mt-3">
                  Learn More
                </Link>
              </motion.button>
            </motion.div>
            <motion.div
              className="col-sm-12 col-md-12 col-lg-4 order-2 order-md-2 image-container mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <Image
                  src="/images/accouting-1.jpg"
                  width={800}
                  height={500}
                  
                  className="img-fluid img-responsive"
                  alt="Accounting"
                />
              </div>
            </motion.div>
            <motion.div
              className="col-sm-12 col-md-12 col-lg-4 order-3 order-md-3 image-container mt-3"
              style={{ marginTop: "10rem" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <Image
                  src="/images/al.jpg"
                  style={{ marginTop:"10rem" }}
                  alt="Artificial Intelligence concept illustration"
                  width={800}
                  height={600}
                  className="img-fluid img-responsive"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="container-fluid mobile-view">
          <div className="row justify-content-center">
          <motion.div className="col-sm-12 col-md-12 col-lg-4 text-center text-md-start legal-content"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 style={{ color: "#293BB1" }} className="mt-3">
                Legal
              </h1>
              <p className="mt-3">
              Most of the businesses faces many complex legal and commercial
                pressures when operating internationally that require the guidance
                of experienced and insightful advisors. Our member will guide you
                through the countless legal issues you may encounter whilst
                conducting business overseas. Our law firm members provide
                solutions in an efficient and seamless manner, giving you more
                time to focus on other facets of your business. Having worked
                across a wide range of industries, our member firms have the
                experience to understand your specific needs and become a trusted
                advisor to your business. With services ranging from employment
                law to international trade law, whatever support your business
                requires to be successful on the international stage, an RACE
                member firm can help.

              </p>
              <motion.button
                className="btn btn-outline-primary"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  width: "198.79px",
                  height: "45.72px",
                  borderRadius: "19.88px",
                  borderWidth: "0.99px",
                }}
              >
                <Link href="/accounting-and-legal" style={{ textDecoration: "none", color: "inherit" }}>
                  Learn More
                </Link>
              </motion.button>
              <motion.div
              className="col-sm-12 col-md-12 col-lg-4 order-2 order-md-2 image-container mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <Image
                  src="/images/accouting-1.jpg"
                  width={800}
                  height={500}
                  
                  className="img-fluid img-responsive"
                  alt="Accounting"
                />
              </div>
            </motion.div>
              <motion.h1
                style={{ color: "#293BB1" }}
                className="mt-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Accounting
              </motion.h1>
              <p className="mt-3">
              Global business comes with complex legal and commercial
                challenges, but you don’t have to face them alone. Our expert law
                firm members provide seamless, strategic solutions, ensuring
                compliance and mitigating risks across borders. With our guidance,
                you can navigate international markets with confidence—freeing you
                to focus on growth and success

              </p>
              <motion.button
                className="btn btn-outline-primary mt-3"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  width: "198.79px",
                  height: "45.72px",
                  borderRadius: "19.88px",
                  borderWidth: "0.99px",
                }}
              >
                <Link href="/accounting-and-legal" style={{ textDecoration: "none", color: "inherit" }} className="mt-3">
                  Learn More
                </Link>
              </motion.button>
            </motion.div>
           
            <motion.div
              className="col-sm-12 col-md-12 col-lg-4 order-3 order-md-3 image-container mt-3"
              style={{ marginTop: "10rem" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <Image
                  src="/images/al.jpg"
                  style={{ marginTop:"10rem" }}
                  alt="Artificial Intelligence concept illustration"
                  width={800}
                  height={600}
                  className="img-fluid img-responsive"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <style jsx>{`
          .image-wrapper {
            width: 100%;
            height: auto;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .img-responsive {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          @media (max-width: 768px) {
            .image-wrapper {
              height: 150px; 
            }
            
            .image-wrapper img {
              width: 100%;
              height: 150px; 
              object-fit: cover; 
            }
          }
              @media only screen and (max-width:570px){
         .desktop-view{
        display:none
         }
         }
          @media only screen and (min-width:571px){
         .mobile-view{
        display:none
         }
         }
        `}</style>
      </motion.div>
    );
  }

  export default Legal;
