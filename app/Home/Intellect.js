/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
function Intellect() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-1">
          <div className="col-md-6 col-12">
            <h1 className="mt-5" style={{ color: "#293BB1" }}>
              Intellect
            </h1>
            <h4 className="mt-3">RACE has a global presence</h4>
            <p className="mt-5">
            “Intellect” is one of the core solution offerings of RACE. Our strong network of market research and consulting team continuously tracks the Indian, global automotive market to provide clients with rich, extensive insights on market entry strategies, product launch, competitive strategy, mega trends, vehicle/ component OEM strategies, regulatory/statutory tracking, customer behaviour analysis and manufacturing feasibility.
            </p>
            <button
              className="btn btn-outline-primary"
              style={{
                width: "198.79px",
                height: "45.72px",
                borderRadius: "19.88px",
                borderWidth: "0.99px",
              }}
            >
              Learn More
            </button>
          </div>
          <div className="col-md-5 col-12">
            <Image
              src="/images/g-1.jpg"
              alt="A scenic landscape view"
              width={1000}
              height={800}
              className="mt-5"
              style={{ width: "100%", height: "80%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intellect;
