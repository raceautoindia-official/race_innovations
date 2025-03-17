"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Product() {
  return (
    <>
      <motion.h1
        className="d-flex justify-content-center text-center mt-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="me-2" style={{ color: "black" }}>
          Our{" "}
        </span>
        <span style={{ color: "#293BB1" }}>Products</span>
      </motion.h1>

      <div className="container-fluid mt-4  desktop-view">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/tech.jpeg"
                width={1000}
                height={500}
                alt="Tech Image"
                className="img-fluid"
              />
            </motion.div>

            <motion.h1
              className="text-center text-md-start mt-4"
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Intellect
            </motion.h1>

            <motion.p
              className="mt-3 text-center text-md-start"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              “Intellect” is one of the core solution offerings of RACE. Our
              strong network of market research and consulting team continuously
              tracks the Indian, global automotive market to provide clients
              with rich, extensive insights on market entry strategies, product
              launch, competitive strategy, mega trends, vehicle/ component OEM
              strategies, regulatory/statutory tracking, customer behaviour
              analysis and manufacturing feasibility.
            </motion.p>

            <motion.button
              className="btn btn-outline-primary d-block mx-auto mx-md-0"
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
              <Link
                href="/intellect"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Learn More
              </Link>
            </motion.button>

            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/world.jpg"
                width={1000}
                height={400}
                className="img-fluid"
                alt="World Image"
              />
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-12 text-center text-md-start mt-4">
            <motion.h1
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              Technic
            </motion.h1>

            <motion.p
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
            >
              RACE engineering team is fully equipped to support the clients
              with various applications and interface engineering enabling the
              automotive market to realize the complete potential of their
              products & services, this involves adequate understanding of the
              technical needs, operating conditions like terrain, location,
              usage pattern and packaging requirements with partners in the
              value chain.
            </motion.p>

            <motion.button
              className="btn btn-outline-primary d-block mx-auto mx-md-0"
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
              <Link
                href="/technic"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Learn More
              </Link>
            </motion.button>

            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/kk.png"
                width={800}
                height={1200}
                className="img-fluid"
                alt="Bright glowing light concept"
              />
            </motion.div>

            <motion.h1
              className="mt-3"
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h1>

            <motion.p
              className=""
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
              viewport={{ once: true }}
            >
              RACE Connect is the cost effective strategy to experience an
              evolving market and the most efficient method to build
              relationship in new markets With Indian Automotive market getting
              more challenging and competitive, RACE Connect program helps
              global companies enter Indian market in the most productive and
              cost-effective manner right from the beginning.
            </motion.p>

            <motion.button
              className="btn btn-outline-primary d-block mx-auto mx-md-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
              viewport={{ once: true }}
              style={{
                width: "198.79px",
                height: "45.72px",
                borderRadius: "19.88px",
                borderWidth: "0.99px",
              }}
            >
              <Link
                href="/connect"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Learn More
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4  mobile-view">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/tech.jpeg"
                width={1000}
                height={500}
                alt="Tech Image"
                className="img-fluid"
              />
            </motion.div>

            <motion.h1
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              Technic
            </motion.h1>
            <motion.p
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
            >
              RACE engineering team is fully equipped to support the clients
              with various applications and interface engineering enabling the
              automotive market to realize the complete potential of their
              products & services, this involves adequate understanding of the
              technical needs, operating conditions like terrain, location,
              usage pattern and packaging requirements with partners in the
              value chain.
            </motion.p>

            <motion.button
              className="btn btn-outline-primary d-block mx-auto mx-md-0"
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
              <Link
                href="/technic"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Learn More
              </Link>
            </motion.button>

            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/world.jpg"
                width={1000}
                height={400}
                className="img-fluid"
                alt="World Image"
              />
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 col-md-12 text-center text-md-start mt-4">
            <motion.h1
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              Intellect
            </motion.h1>

            <motion.p
              className="mt-3 text-center text-md-start"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              “Intellect” is one of the core solution offerings of RACE. Our
              strong network of market research and consulting team continuously
              tracks the Indian, global automotive market to provide clients
              with rich, extensive insights on market entry strategies, product
              launch, competitive strategy, mega trends, vehicle/ component OEM
              strategies, regulatory/statutory tracking, customer behaviour
              analysis and manufacturing feasibility.
            </motion.p>

            <motion.button
              className="btn btn-outline-primary d-block mx-auto mx-md-0"
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
              <Link
                href="/intellect"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Learn More
              </Link>
            </motion.button>

            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/kk.png"
                width={800}
                height={1200}
                className="img-fluid"
                alt="Bright glowing light concept"
              />
            </motion.div>

            <motion.h1
              className="mt-3"
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h1>

            <motion.p
              className=""
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
              viewport={{ once: true }}
            >
              RACE Connect is the cost effective strategy to experience an
              evolving market and the most efficient method to build
              relationship in new markets With Indian Automotive market getting
              more challenging and competitive, RACE Connect program helps
              global companies enter Indian market in the most productive and
              cost-effective manner right from the beginning.
            </motion.p>

            <motion.button
              className="btn  d-block mx-auto mx-md-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
              viewport={{ once: true }}
              style={{
                width: "198.79px",
                height: "45.72px",
                borderRadius: "19.88px",
                borderWidth: "0.99px",
                
              }}
            >
              <Link
                href="/connect"
                className=" custom-btn text-dark px-4 py-2 rounded"
              >
                Learn More
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 570px) {
          .desktop-view {
            display: none;
          }
        }
        @media only screen and (min-width: 571px) {
          .mobile-view {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Product;
