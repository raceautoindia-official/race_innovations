import React from 'react'
import Image from "next/image";
function Connect() {
  return (
    <div className='container-fluid'>
    <div className="row">
    <div className="col-md-7 col-12">
    <Image
    src="/images/world.jpg"
    alt="Globe showing world map"
    fill
    style={{ objectFit: "cover" }}
  />
    </div>
    <div className="col-md-3 col-12">
      <h1 style={{ color: "#293BB1" }}>Connect</h1>
      <h4 className="mt-2">RACE has a global presence</h4>
      <p className="mt-3">
      RACE Application Engineering capability helps company do develop right product for Indian application requirement.
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
  </div>
  </div>
  )
}

export default Connect